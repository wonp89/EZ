package com.ez.ezbackend.budget.service;

import com.ez.ezbackend.budget.repository.ScheduleRepository;
import com.ez.ezbackend.budget.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Inject;
import java.time.LocalDateTime;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Inject))
public class ScheduleServiceImpl implements ScheduleService {
  private final ScheduleRepository scheduleRepository;
  private final TransactionRepository transactionRepository;

  @Scheduled(cron = "0 0 0 * * ?", zone = "UTC")
  public void runSchedule() {
    LocalDateTime localDateTime = LocalDateTime.now();
    log.info("Running daily scheduled operation at {}.", localDateTime);
  }

  @Scheduled(cron = "*/10 * * * * ?", zone = "UTC")
  public void runEvery10SecondSchedule() {
    LocalDateTime localDateTime = LocalDateTime.now();
    log.info("Running 10-second scheduled operation at {}.", localDateTime);
  }
}
