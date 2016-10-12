#ifndef PANDIGITALS_H
#define PANDIGITALS_H

#include <string>
using std::string;

class Pandigitals
{
public:
	// Returns true if value is n-super-pandigital
	static bool is_super_pandigital(long long value, int n);

private:
	// Static class - Disallow instantiation
	Pandigitals () {}

	// Tests
	friend class Pandigitals_Tests;

	static string convert_to_base(long long value, int base);
	static bool is_pandigital(string value, int base);
};

#endif