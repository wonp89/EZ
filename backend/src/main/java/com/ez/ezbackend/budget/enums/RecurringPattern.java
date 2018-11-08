package com.ez.ezbackend.budget.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RecurringPattern {
  YEARLY("Yearly"),
  BI_MONTHLY("Bi-monthly"),
  MONTHLY("Monthly"),
  BI_WEEKLY("Bi-weekly"),
  WEEKLY("Weekly");

  private String value;
}
