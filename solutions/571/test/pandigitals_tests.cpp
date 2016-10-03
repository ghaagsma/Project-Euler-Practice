#include <assert.h>
#include <iostream>
#include "pandigitals_tests.h"
#include "pandigitals.h"

void Pandigitals_Tests::run_tests()
{
	convert_to_base_0();
	convert_to_base_1();
}

void Pandigitals_Tests::convert_to_base_0()
{
	// Arrange
	long long value = 555;
	int base = 10;
	long long expected_result = 555;
	
	// Act
	auto result = Pandigitals::convert_to_base(value, base);

	// Assert
	assert(result == expected_result);
}

void Pandigitals_Tests::convert_to_base_1()
{
	// Arrange
	long long value = 555;
	int base = 2;
	long long expected_result = 1101011;
	
	// Act
	auto result = Pandigitals::convert_to_base(value, base);

	// Assert
	assert(result == expected_result);
}