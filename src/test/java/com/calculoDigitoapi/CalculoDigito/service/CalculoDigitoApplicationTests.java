package com.calculoDigitoapi.CalculoDigito.service;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.assertThat;

import java.io.File;
import java.io.IOException;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;

import com.calculoDigitoapi.CalculoDigito.exeptions.BusinessException;

public class CalculoDigitoApplicationTests {

	@InjectMocks
	private CalculoDigitoService service;

	@Rule
	public ExpectedException exception = ExpectedException.none();

	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void testCalcularPrimeiroDigito() {
		// cenario
		String matricula = "9876";

		// acao
		String primeiroDigito = String.valueOf(matricula.charAt(1));
		Integer resultado = Integer.valueOf(primeiroDigito) * 4;

		// verificacao
		assertThat(resultado, is(equalTo(32)));

	}

	@Test
	public void testCalcularSegundoDigito() {
		// cenario
		String matricula = "9876";

		// acao
		String primeiroDigito = String.valueOf(matricula.charAt(1));
		Integer resultado = Integer.valueOf(primeiroDigito) * 4;

		// verificacao
		assertThat(resultado, is(equalTo(32)));
	}

	@Test
	public void testCalcularTerceiroDigito() {
		// cenario
		String matricula = "9876";

		// acao
		String primeiroDigito = String.valueOf(matricula.charAt(2));
		Integer resultado = Integer.valueOf(primeiroDigito) * 3;

		// verificacao
		assertThat(resultado, is(equalTo(21)));
	}

	@Test
	public void testCalcularQuartoDigito() {
		// cenario
		String matricula = "9876";

		// acao
		String primeiroDigito = String.valueOf(matricula.charAt(3));
		Integer resultado = Integer.valueOf(primeiroDigito) * 2;

		// verificacao
		assertThat(resultado, is(equalTo(12)));
	}

	@Test
	public void calcularRestoDivisao() {
		// cenario
		Integer valor = 110;

		// acao
		Integer resto = valor % 16;

		// verificacao
		assertThat(resto, is(equalTo(14)));
	}

	@Test
	public void obterBase16() {
		// cenario
		Integer valor = 14;

		// acao
		String base16 = Integer.toHexString(valor).toUpperCase();

		// verificacao
		assertThat(base16, is(equalTo("E")));
	}

	@Test
	public void testMontarMatricula() throws BusinessException {
		// cenario
		String matricula;

		// acao
		matricula = service.montarMatricula("0924");

		// verificacao
		assertThat(matricula, is(equalTo("0924-2")));
	}

	
	@Test
	public void checkIfMatriculaIsTrueOrFalse() throws IOException, BusinessException {

		// cenario
		String[] matriculas = new String[] {"0822-A","1988-1","3186-7","4573-3"};
		
		// acao
		File file = service.checkIfMatriculaIsTrueOrFalse(matriculas);

		// verificacao
		assertThat(file, notNullValue());

	}

	
}
