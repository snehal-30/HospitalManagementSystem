package com.example.demo.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;


import com.example.demo.entities.Appointment;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.Patient;
import com.example.demo.entities.Slot;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

	@Query("select a from Appointment a where p_id = ?1")
	public Appointment getAppointment(Patient p);
	
	
	//@Query("select s from Slot s where s.s_id not in (:booked)")
	//@Query(value = "SELECT a.s_id from Appointment a JOIN Slot Where a.app_date =:dt",nativeQuery = true)
	
	
	//public List<Slot> getAvailable(List<Slot> booked);
	@Query("select s from Slot s where s_id not in (select a.s_id from Appointment a where a.doc_id = :doc_id and a.app_date = :dt and a.status='active')")	
	public List<Slot> getAvailable(Doctor doc_id, Date dt);


	

	//SELECT * FROM slot where s_id not in (select s_id from appointment where doc_id = 11 and app_date = '2021-03-15');
	
	@Query("select s from Slot s where s_id in (select a.s_id from Appointment a where a.doc_id = :doc_id and a.app_date = :dt and a.status='active')")	
	public List<Slot> getBooked(Doctor doc_id,Date dt);
	
	@Query("select a from Appointment a where a.p_id = :p_id")
	public List<Appointment> getAllAppointmentsByPatientId(Patient p_id);
	

}
