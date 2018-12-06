package com.assignment.common;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Random;

import org.json.JSONException;
import org.json.JSONObject;

public class apispecificMethod {

		URL url =null;
		HttpURLConnection conn=null;
		int responseCode ;
		JSONObject myResponse=null;
		BufferedReader rd=null;
		String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36";
		
	public JSONObject getMethod(String urltoload) throws IOException, JSONException {
		StringBuilder result = new StringBuilder();
		url = new URL(urltoload);
		conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		responseCode = conn.getResponseCode();
		rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String line;
		while ((line = rd.readLine()) != null) {
		//	System.out.println("Printing data " + line);
			result.append(line);
		}
		rd.close();
		conn.disconnect();
		System.out.println("Response code " + responseCode);
		myResponse = new JSONObject(result.toString().trim().charAt(0));
		return myResponse;
	}

	public JSONObject postMethod(String urltoload,String type,int range) throws IOException {
		Random rand = new Random(); 
		int ID =100 + rand.nextInt(range);
		url = new URL(urltoload);
		conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("POST");
		conn.setRequestProperty("User-Agent", USER_AGENT);
		conn.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
		conn.setRequestProperty("Content-Type",type);
		System.out.println("Request ID "+ID);
	//	String urlParameters = "{ \"postId\": 15, \"id\": ID, \"name\":\"Posting  for assignment\",\"email\": \"kumar.deepaktiwari@gmail.com\", \"body\": \"POST api test\"}";
		String urlParameters = "{ \"postId\": 15, "
				+ "\"id\": "+ID+
				","+ " \"name\":\"Posting  for assignment\","
				+ "\"email\": \"kumar.deepaktiwari@gmail.com\","
				+ " \"body\": \"POST api test\"}";
		conn.setDoOutput(true);
		DataOutputStream wr = new DataOutputStream(conn.getOutputStream());
		wr.writeBytes(urlParameters);
		wr.flush();
		wr.close();
		responseCode = conn.getResponseCode();
		System.out.println("\nSending 'POST' request to URL : " + urltoload);
		System.out.println("Post parameters : " + urlParameters);
		System.out.println("Response Code : " + responseCode);
		rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = rd.readLine()) != null) {
		//	System.out.println("Printing data " + inputLine);
			response.append(inputLine);
		}
		rd.close();
		conn.disconnect();
		myResponse = new JSONObject(response.toString().trim().charAt(0));
		return myResponse;
	}

	public int putMethod(String urltoload,String type) throws IOException {
		URL url = new URL(urltoload);
		conn = (HttpURLConnection) url.openConnection();
		conn.setDoOutput(true);
		conn.setRequestMethod("PUT");
		conn.setRequestProperty("Content-Type", type);
		conn.setRequestProperty("Accept",type);
		OutputStreamWriter out = new OutputStreamWriter(conn.getOutputStream());
		String Resourcecontent =  "{\"userId\": 1,"
				+ "\"id\": 11,"
				+ "\"title\": \"Delta\"}";
		out.write(Resourcecontent);
		out.flush();
		out.close();
		responseCode = conn.getResponseCode();
		conn.disconnect();
		return responseCode;
	}

	public String getResponseHeader(String urltoload) throws IOException {
		System.out.println(urltoload);
		url = new URL(urltoload);
		conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		String hf = conn.getHeaderField("Content-Type");
		System.out.println("Printing header field " + hf);
		conn.disconnect();
		return hf;

	}
}
