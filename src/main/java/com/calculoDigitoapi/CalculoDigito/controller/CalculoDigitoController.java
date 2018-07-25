package com.calculoDigitoapi.CalculoDigito.controller;

import java.io.File;
import java.io.Serializable;
import java.nio.charset.StandardCharsets;

import javax.validation.Valid;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calculoDigitoapi.CalculoDigito.model.dto.Arquivo;
import com.calculoDigitoapi.CalculoDigito.service.CalculoDigitoService;

@RestController
@RequestMapping("/api/v1")
public class CalculoDigitoController implements Serializable {

	private static final long serialVersionUID = -796374802792268735L;

	static final Logger logger = LoggerFactory.getLogger(CalculoDigitoController.class);

	@Autowired
	private CalculoDigitoService service;

	@PostMapping("/gerarMatriculasComDV")
	public ResponseEntity<?> gerarMatriculasComDV(@Valid @RequestBody String arquivoText) {

		try {

			if (StringUtils.isNotBlank(arquivoText)) {

				final String[] matriculas = arquivoText.split("\r\n"); // divide
																		// o
																		// arquivo
																		// utilizando
																		// os
																		// separados
																		// \r\n
																		// e os
																		// envia
																		// para
																		// um
																		// array
																		// de
																		// string.
				final File matriculasComDV = service.gerarMatriculasComDV(matriculas);
				final byte[] encoded = Base64.encodeBase64(FileUtils.readFileToByteArray(matriculasComDV));
				final Arquivo arquivo = new Arquivo(new String(encoded, StandardCharsets.US_ASCII));

				return ResponseEntity.ok().body(arquivo);
			}

			return ResponseEntity.noContent().build();

		} catch (Exception e) {
			logger.error("Ocorreu um erro inesperado ao tentar gerar matriculas dom DV. Motivo: {}",
					new Object[] { e.getMessage(), e });
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}

	@PostMapping("/matriculasParaVerificar")
	public ResponseEntity<?> matriculasParaVerificar(@Valid @RequestBody String arquivoText) {

		try {

			if (StringUtils.isNotBlank(arquivoText)) {

				final String[] matriculas = arquivoText.split("\r\n");
				final File matriculasComDV = service.checkIfMatriculaIsTrueOrFalse(matriculas);
				final byte[] encoded = Base64.encodeBase64(FileUtils.readFileToByteArray(matriculasComDV));
				final Arquivo arquivo = new Arquivo(new String(encoded, StandardCharsets.US_ASCII));

				return ResponseEntity.ok().body(arquivo);
			}

			return ResponseEntity.noContent().build();

		} catch (Exception e) {
			logger.error("Ocorreu um erro inesperado ao tentar verificar as matriculas. Motivo: {}",
					new Object[] { e.getMessage(), e });
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}

}
