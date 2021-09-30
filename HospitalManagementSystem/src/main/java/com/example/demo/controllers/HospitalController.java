package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Hospital;
import com.example.demo.services.HospitalService;



@CrossOrigin
@RestController
public class HospitalController {

	@Autowired
	HospitalService hospServ;
	
	
	@PostMapping("/addHospital")
	public Hospital save (@RequestBody Hospital h)
	{
		Hospital h1=new Hospital(h.getHospitalName(), h.getHospAddress(),h.getHospContact(),h.getHospEmail());
		return hospServ.save(h1);
	}
}
