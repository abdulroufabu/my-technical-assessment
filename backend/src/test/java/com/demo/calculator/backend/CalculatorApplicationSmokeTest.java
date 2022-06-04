package com.demo.calculator.backend;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.demo.calculator.backend.controller.CalculatorController;

@SpringBootTest
public class CalculatorApplicationSmokeTest {

    @Autowired
    private CalculatorController controller;
    
	@Test
    public void contextLoads() throws Exception {
        assertThat(controller).isNotNull();
    }

}