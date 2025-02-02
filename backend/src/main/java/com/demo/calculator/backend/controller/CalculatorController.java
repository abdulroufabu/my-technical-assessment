package com.demo.calculator.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.calculator.backend.model.Equation;
import com.demo.calculator.backend.service.Calculator;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping("/api/calculator")
public class CalculatorController implements Calculator {

	
	@GetMapping("/add")
	@Operation(summary = "Add Operation", responses = {
            @ApiResponse(description = "Result", responseCode = "200",
                    content = @Content(mediaType = "application/json",schema = @Schema(implementation = Equation.class))),
            @ApiResponse(description = "Bad Request",responseCode = "400",content = @Content)
    })
	public ResponseEntity<Equation> add(@RequestParam(value = "param1", required = true) String param1,
			@RequestParam(value = "param2", required = true) String param2) {
		try {
			return ResponseEntity.ok(Calculator.add(Double.parseDouble(param1), Double.parseDouble(param2)));
		} catch (Exception e) {
			return new ResponseEntity<Equation>(new Equation("+"), HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/subtract")
	@Operation(summary = "Subtract Operation", responses = {
            @ApiResponse(description = "Result", responseCode = "200",
                    content = @Content(mediaType = "application/json",schema = @Schema(implementation = Equation.class))),
            @ApiResponse(description = "Bad Request",responseCode = "400",content = @Content)
    })
	public ResponseEntity<Equation> subtract(@RequestParam(value = "param1", required = true) String param1,
			@RequestParam(value = "param2", required = true) String param2) {
		try {
			return ResponseEntity.ok(Calculator.subtract(Double.parseDouble(param1), Double.parseDouble(param2)));
		} catch (Exception e) {
			return new ResponseEntity<Equation>(new Equation("-"), HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/multiply")
	@Operation(summary = "Multiply Operation", responses = {
            @ApiResponse(description = "Result", responseCode = "200",
                    content = @Content(mediaType = "application/json",schema = @Schema(implementation = Equation.class))),
            @ApiResponse(description = "Bad Request",responseCode = "400",content = @Content)
    })
	public ResponseEntity<Equation> multiply(@RequestParam(value = "param1", required = true) String param1,
			@RequestParam(value = "param2", required = true) String param2) {
		try {
			return ResponseEntity.ok(Calculator.multiply(Double.parseDouble(param1), Double.parseDouble(param2)));
		} catch (Exception e) {
			return new ResponseEntity<Equation>(new Equation("*"), HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/divide")
	@Operation(summary = "Divide Operation", responses = {
            @ApiResponse(description = "Result", responseCode = "200",
                    content = @Content(mediaType = "application/json",schema = @Schema(implementation = Equation.class))),
            @ApiResponse(description = "Bad Request",responseCode = "400",content = @Content)
    })
	public ResponseEntity<Equation> divide(@RequestParam(value = "param1", required = true) String param1,
			@RequestParam(value = "param2", required = true) String param2) {
		try {
			Double denominator = Double.parseDouble(param2);
			if (denominator == 0.0) {
				throw new ArithmeticException();
			}
			return ResponseEntity.ok(Calculator.divide(Double.parseDouble(param1), Double.parseDouble(param2)));
		} catch (Exception e) {
			return new ResponseEntity<Equation>(new Equation("/"), HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/squareRoot")
	@Operation(summary = "Squareroot Operation", responses = {
            @ApiResponse(description = "Result", responseCode = "200",
                    content = @Content(mediaType = "application/json",schema = @Schema(implementation = Equation.class))),
            @ApiResponse(description = "Bad Request",responseCode = "400",content = @Content)
    })
	public ResponseEntity<Equation> squareRoot(@RequestParam(value = "param1", required = false) String param1,
			@RequestParam(value = "param2", required = true) String param2) {
		try {
			
			return ResponseEntity.ok(Calculator.squareRoot(Double.parseDouble(param1), Double.parseDouble(param2)));
		} catch (Exception e) {
			return new ResponseEntity<Equation>(new Equation("√"), HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/power")
	@Operation(summary = "Power Operation", responses = {
            @ApiResponse(description = "Result", responseCode = "200",
                    content = @Content(mediaType = "application/json",schema = @Schema(implementation = Equation.class))),
            @ApiResponse(description = "Bad Request",responseCode = "400",content = @Content)
    })
	public ResponseEntity<Equation> power(@RequestParam(value = "param1", required = true) String param1,
			@RequestParam(value = "param2", required = true) String param2) {
		try {
			
			return ResponseEntity.ok(Calculator.power(Double.parseDouble(param1), Double.parseDouble(param2)));
		} catch (Exception e) {
			return new ResponseEntity<Equation>(new Equation("^"), HttpStatus.BAD_REQUEST);
		}
	}
}
