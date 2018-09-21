package com.ez.ezbackend.shared.exception;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.Arrays;

@Slf4j
@ControllerAdvice
public class EzExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(Exception.class)
  public final ResponseEntity<ExceptionResponse> handleGeneralException(Exception ex, WebRequest request) {
    log.error("General exception", ex);
    ExceptionResponse response = createExceptionResponse(ex, request);
    return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(EzNotFoundException.class)
  public final ResponseEntity<ExceptionResponse> handleNotFoundException(Exception ex, WebRequest request) {
    log.error("Not found", ex);
    ExceptionResponse response = createExceptionResponse(ex, request);
    return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
  }

  private ExceptionResponse createExceptionResponse(Exception ex, WebRequest request) {
    return ExceptionResponse.builder()
        .message(ex.getMessage())
        .detail(request.getDescription(false))
        .stacktraces(Arrays.asList(ExceptionUtils.getStackFrames(ex)))
        .timestamp(LocalDateTime.now())
        .build();
  }
}