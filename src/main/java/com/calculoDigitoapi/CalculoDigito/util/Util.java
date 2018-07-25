package com.calculoDigitoapi.CalculoDigito.util;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class Util {


	public static File gerarArquivo(List<String> matriculas) throws IOException {
		File file = new File("matriculasComDV.txt");
		BufferedWriter output = null;
		
		try {
			output = new BufferedWriter(new FileWriter(file));
			for (String m : matriculas) {
				output.write(m + "\r\n");
			}

		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (output != null) {
				output.close();
			}
		}

		return file;
	}
}