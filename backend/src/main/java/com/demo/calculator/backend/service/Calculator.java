package com.demo.calculator.backend.service;

import com.demo.calculator.backend.model.Equation;

public interface Calculator {
	public static Equation add(Double left, Double right) {
		return new Equation(left, right, left + right, "+");
	}

	public static Equation subtract(Double left, Double right) {
		return new Equation(left, right, left - right, "-");
	}

	public static Equation multiply(Double left, Double right) {
		return new Equation(left, right, left * right, "*");
	}

	public static Equation divide(Double left, Double right) {
		return new Equation(left, right, left / right, "/");
	}

	public static Equation squareRoot(Double left, Double right) {
		return new Equation(left, right, Math.sqrt(right) * left, "√");
	}

	public static Equation power(Double left, Double right) {
		return new Equation(left, right, Math.pow(left, right), "^");
	}
}