package com.ez.ezbackend.budget.entity;

import com.ez.ezbackend.budget.enums.RecurringPattern;
import com.ez.ezbackend.budget.enums.TransactionType;
import com.ez.ezbackend.shared.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Schedule {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  private String description;

  @Enumerated(EnumType.STRING)
  private TransactionType transactionType;

  private BigDecimal amount;

  private LocalDate startDate;

  @Enumerated(EnumType.STRING)
  private RecurringPattern recurringPattern;

  private LocalDate lastProcessedDate;

  private LocalDate nextRecurringDate;

  private LocalDateTime createDateTime;

}
