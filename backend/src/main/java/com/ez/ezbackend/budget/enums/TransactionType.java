package com.ez.ezbackend.budget.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum TransactionType {
  DEPOSIT("Deposit"),
  WITHDRAW("Withdraw");

  private String value;
}
