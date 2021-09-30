package com.example.demo.services;

import java.sql.Time;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Slot;
import com.example.demo.repositories.SlotRepository;



@Service
public class SlotService {
	@Autowired
	SlotService srepo;
	@Autowired
	SlotRepository slrepo;
	public Slot checkSlot(Time s_from , Time s_to)
	{
		return srepo.checkSlot(s_from , s_to);
	}
	
	public  Slot save(Slot st)
	{
		 return srepo.save(st);
	}
	
	
	public Slot getOne(int sid) {
		Optional<Slot> sl = slrepo.findById(sid);
		Slot s = null;
		try
		{
			s = sl.get();
		}
		catch(NoSuchElementException e)
		{
			s=null;
		}
		return s;
	}
}
	

	

	


