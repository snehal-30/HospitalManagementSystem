package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="hospital")
public class Hospital {
	
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	int hos_id;
	@Column(length = 20,name="hosp_name")
	 private String hospitalName;
	@Column(length = 20,name="hosp_addr")
	 private String hospAddress;
	@Column(length = 10,name="hosp_phno") 
	private String hospContact;
	@Column(length = 20,name="hosp_email",unique = true)
	private String hospEmail;
	public Hospital() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getHos_id() {
		return hos_id;
	}
	public void setHos_id(int hos_id) {
		this.hos_id = hos_id;
	}
	public String getHospitalName() {
		return hospitalName;
	}
	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}
	public String getHospAddress() {
		return hospAddress;
	}
	public void setHospAddress(String hospAddress) {
		this.hospAddress = hospAddress;
	}
	public String getHospContact() {
		return hospContact;
	}
	public void setHospContact(String hospContact) {
		this.hospContact = hospContact;
	}
	public String getHospEmail() {
		return hospEmail;
	}
	public void setHospEmail(String hospEmail) {
		this.hospEmail = hospEmail;
	}
	public Hospital( String hospitalName, String hospAddress, String hospContact, String hospEmail) {
		super();
		
		this.hospitalName = hospitalName;
		this.hospAddress = hospAddress;
		this.hospContact = hospContact;
		this.hospEmail = hospEmail;
	}
	
	
	
	
}