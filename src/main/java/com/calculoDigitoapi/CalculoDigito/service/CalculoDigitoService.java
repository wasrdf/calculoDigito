package com.calculoDigitoapi.CalculoDigito.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.calculoDigitoapi.CalculoDigito.exeptions.BusinessException;
import com.calculoDigitoapi.CalculoDigito.util.Util;

@Service
public class CalculoDigitoService {

	/**
	 * Metódo responsavel por gerar as matriculas e seus digitos verificadores.
	 * @param matricula
	 * @return
	 * @throws BusinessException
	 */
	public String montarMatricula(final String matricula) throws BusinessException {

		//Se a matricula for invalida é gerada uma exception
		if (!StringUtils.isNotBlank(matricula) || matricula.length() < 4) {
			throw new BusinessException("Matrícula invalida");
		}

		// calcula primeiro digito
		String pDigito = String.valueOf(matricula.charAt(0));
		Integer p = Integer.valueOf(pDigito) * 5;

		// calcula segundo digito
		String sDigito = String.valueOf(matricula.charAt(1));
		Integer s = Integer.valueOf(sDigito) * 4;

		// calcula terceiro digito
		String tDigito = String.valueOf(matricula.charAt(2));
		Integer t = Integer.valueOf(tDigito) * 3;

		// calcula quarto digito
		String qDigito = String.valueOf(matricula.charAt(3));
		Integer q = Integer.valueOf(qDigito) * 2;

		// soma o valor total
		Integer valorTotal = p + s + t + q;

		// obtem o resto da divisao
		Integer resto = valorTotal % 16;

		// obtem o base16
		final String base = Integer.toHexString(resto).toUpperCase();

		return matricula + "-" + base;
	}

	public File gerarMatriculasComDV(final String[] matriculas) throws BusinessException, IOException {

		final List<String> matriculasCompletas = new ArrayList<>();

		for (String m : matriculas) {
			matriculasCompletas.add(montarMatricula(m));
		}
		// gerar arquivo
		return Util.gerarArquivo(matriculasCompletas); 

	}

	/**
	 * 
	 * @param matriculas
	 * @return
	 * @throws IOException
	 * @throws BusinessException
	 */
	public File checkIfMatriculaIsTrueOrFalse(final String[] matriculas) throws IOException, BusinessException {

		BufferedWriter output = null;
		final File file = new File("matriculasVerificadas.txt");
		output = new BufferedWriter(new FileWriter(file));
		for (String matricula : matriculas) {
			/**
			 * Na linha abaixo eu pago cada matricula com DV do arquivo
			 * removendo o DV apenas da posição 1 até 4 
			 * exemplo:  0902-8 
			 * da posição 1 até 4 = 0902
			 * e então é gerado uma matricula valida pra ela.
			 */
			
			final String m = montarMatricula(matricula.substring(0, 4)); 
			//Verifica se as duas matriculas são iguais SE = VERDADEIRO SE NÃO FALSO
			if (m.equals(matricula)) {
				output.write(m + " verdadeiro" + "\r\n"); //concatena a matricula + condicao
			} else {
				output.write(m + " falso" + "\r\n");
			}
		}

		if (output != null) {
			output.close();
		}
		return file;
	}

}
