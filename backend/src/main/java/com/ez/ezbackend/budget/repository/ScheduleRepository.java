package com.ez.ezbackend.budget.repository;

import com.ez.ezbackend.budget.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
  List<Schedule> findByNextRecurringDate(LocalDate date);
}
