function calculateConsultingRate() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const complexityFactor = parseFloat(document.getElementById('complexityFactor').value);
    const experienceLevel = parseFloat(document.getElementById('experienceLevel').value);
    const overheadCosts = parseFloat(document.getElementById('overheadCosts').value);
    const marketAdjustment = parseFloat(document.getElementById('marketAdjustment').value);

    if (isNaN(hourlyRate) || isNaN(hoursWorked) || isNaN(complexityFactor) || isNaN(experienceLevel) || isNaN(overheadCosts) || isNaN(marketAdjustment)) {
        document.getElementById('result').textContent = "Please enter valid numeric values.";
        return;
    }

    const baseFee = hourlyRate * hoursWorked;
    const adjustedFee = baseFee * complexityFactor * experienceLevel;
    const totalFeeBeforeMarket = adjustedFee + overheadCosts;
    const totalFee = totalFeeBeforeMarket * marketAdjustment;

    const breakdown = {
        "Base Fee": baseFee.toFixed(2),
        "Adjusted Fee (Complexity & Experience)": adjustedFee.toFixed(2),
        "Overhead Costs": overheadCosts.toFixed(2),
        "Total Before Market Adjustment": totalFeeBeforeMarket.toFixed(2),
        "Market Adjustment": (totalFeeBeforeMarket * (marketAdjustment - 1)).toFixed(2),
        "Total Consulting Fee": totalFee.toFixed(2)
    };

    let resultText = '';
    for (let key in breakdown) {
        resultText += `${key}: $${breakdown[key]}<br>`;
    }

    document.getElementById('result').innerHTML = resultText;
}
