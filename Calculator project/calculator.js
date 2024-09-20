
	let results = [];  // Store valid results for summary calculation

	// Function to calculate minimum, maximum, average, and total
	function calculateSummary(validResults) {
		let min = Math.min(...validResults);
		let max = Math.max(...validResults);
		let total = validResults.reduce((acc, num) => acc + num, 0);
		let avg = total / validResults.length;
		return { min, max, avg, total };
	}

	// Table to display individual results
	document.write("<table>");
	document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

	while (true) {
		let x = prompt("Enter the first number (x):");
		if (x === null) break;  // Exit if Cancel is clicked
		if (isNaN(x)) {
			alert("Invalid input! Please enter a valid number for x.");
			document.write("<tr><td>" + x + "</td><td></td><td></td><td>Invalid input for x</td></tr>");
			continue;
		}
		x = parseFloat(x);

		let y = prompt("Enter the second number (y):");
		if (y === null) break;  // Exit if Cancel is clicked
		if (isNaN(y)) {
			alert("Invalid input! Please enter a valid number for y.");
			document.write("<tr><td>" + x + "</td><td></td><td>" + y + "</td><td>Invalid input for y</td></tr>");
			continue;
		}
		y = parseFloat(y);

		let operator = prompt("Enter an operator (+, -, *, /, %):");
		if (operator === null) break;  // Exit if Cancel is clicked

		let result;
		switch (operator) {
			case '+':
				result = x + y;
				break;
			case '-':
				result = x - y;
				break;
			case '*':
				result = x * y;
				break;
			case '/':
				result = y !== 0 ? x / y : 'Error: Division by zero';
				break;
			case '%':
				result = y !== 0 ? x % y : 'Error: Division by zero';
				break;
			default:
				result = "Invalid operator";
		}

		document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
		
		if (typeof result === 'number') {
			results.push(result);  // Add valid result to the list for summary calculation
		}
	}

	document.write("</table>");  // End individual result table

	// Calculate summary if there are valid results
	if (results.length > 0) {
		let summary = calculateSummary(results);

		// Display summary table
		document.write("<h2>Summary</h2>");
		document.write("<table>");
		document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
		document.write("<tr><td>" + summary.min + "</td><td>" + summary.max + "</td><td>" + summary.avg.toFixed(2) + "</td><td>" + summary.total + "</td></tr>");
		document.write("</table>");
	} else {
		document.write("<p>No valid results to display in the summary.</p>");
	}