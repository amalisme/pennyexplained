// ============================================
// PennyExplained.com - Main JavaScript
// Calculator Functions & Interactive Features
// ============================================

// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change icon
            const icon = this.textContent;
            this.textContent = icon === '☰' ? '✕' : '☰';
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!event.target.closest('.main-nav') && !event.target.closest('.menu-toggle')) {
                mainNav.classList.remove('active');
                if (menuToggle) menuToggle.textContent = '☰';
            }
        }
    });
});

// ============================================
// BUDGET CALCULATOR
// ============================================
function calculateBudget() {
    // Get input values
    const monthlyIncome = parseFloat(document.getElementById('monthly-income').value) || 0;
    const budgetMethod = document.getElementById('budget-method').value;
    
    if (monthlyIncome <= 0) {
        alert('Please enter a valid monthly income.');
        return;
    }
    
    let needs, wants, savings;
    
    // Calculate based on selected method
    if (budgetMethod === '50-30-20') {
        needs = monthlyIncome * 0.50;
        wants = monthlyIncome * 0.30;
        savings = monthlyIncome * 0.20;
    } else if (budgetMethod === '60-20-20') {
        needs = monthlyIncome * 0.60;
        wants = monthlyIncome * 0.20;
        savings = monthlyIncome * 0.20;
    } else { // 70-20-10
        needs = monthlyIncome * 0.70;
        wants = monthlyIncome * 0.20;
        savings = monthlyIncome * 0.10;
    }
    
    // Display results
    document.getElementById('result-needs').textContent = formatCurrency(needs);
    document.getElementById('result-wants').textContent = formatCurrency(wants);
    document.getElementById('result-savings').textContent = formatCurrency(savings);
    
    // Show result box
    const resultBox = document.getElementById('budget-result');
    resultBox.classList.remove('hidden');
    
    // Smooth scroll to results
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================
// EMERGENCY FUND CALCULATOR
// ============================================
function calculateEmergencyFund() {
    // Get input values
    const monthlyExpenses = parseFloat(document.getElementById('monthly-expenses').value) || 0;
    const targetMonths = parseInt(document.getElementById('target-months').value) || 3;
    const currentSavings = parseFloat(document.getElementById('current-savings').value) || 0;
    const monthlySavings = parseFloat(document.getElementById('monthly-savings').value) || 0;
    
    if (monthlyExpenses <= 0) {
        alert('Please enter valid monthly expenses.');
        return;
    }
    
    // Calculate emergency fund goal
    const emergencyFundGoal = monthlyExpenses * targetMonths;
    const amountNeeded = Math.max(0, emergencyFundGoal - currentSavings);
    
    // Calculate months to reach goal
    let monthsToGoal = 0;
    if (monthlySavings > 0 && amountNeeded > 0) {
        monthsToGoal = Math.ceil(amountNeeded / monthlySavings);
    }
    
    // Display results
    document.getElementById('emergency-fund-goal').textContent = formatCurrency(emergencyFundGoal);
    document.getElementById('amount-needed').textContent = formatCurrency(amountNeeded);
    
    // Display months to goal
    const monthsElement = document.getElementById('months-to-goal');
    if (amountNeeded === 0) {
        monthsElement.textContent = 'Goal Reached! 🎉';
        monthsElement.style.color = '#10b981';
    } else if (monthlySavings > 0) {
        monthsElement.textContent = `${monthsToGoal} months`;
        monthsElement.style.color = '#1f2937';
    } else {
        monthsElement.textContent = 'Set monthly savings amount';
        monthsElement.style.color = '#64748b';
    }
    
    // Show result box
    const resultBox = document.getElementById('emergency-result');
    resultBox.classList.remove('hidden');
    
    // Smooth scroll to results
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================
// SAVINGS GOAL CALCULATOR
// ============================================
function calculateSavingsGoal() {
    // Get input values
    const savingsGoal = parseFloat(document.getElementById('savings-goal').value) || 0;
    const currentAmount = parseFloat(document.getElementById('current-amount').value) || 0;
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value) || 0;
    const targetDate = document.getElementById('target-date').value;
    
    if (savingsGoal <= 0) {
        alert('Please enter a valid savings goal.');
        return;
    }
    
    const amountNeeded = Math.max(0, savingsGoal - currentAmount);
    
    // Calculate months to goal based on monthly contribution
    let monthsToGoal = 0;
    if (monthlyContribution > 0 && amountNeeded > 0) {
        monthsToGoal = Math.ceil(amountNeeded / monthlyContribution);
    }
    
    // If target date is provided, calculate required monthly savings
    let requiredMonthlySavings = 0;
    let monthsAvailable = 0;
    
    if (targetDate) {
        const today = new Date();
        const target = new Date(targetDate);
        monthsAvailable = Math.max(0, Math.ceil((target - today) / (1000 * 60 * 60 * 24 * 30)));
        
        if (monthsAvailable > 0 && amountNeeded > 0) {
            requiredMonthlySavings = amountNeeded / monthsAvailable;
        }
    }
    
    // Display results
    document.getElementById('total-needed').textContent = formatCurrency(amountNeeded);
    
    // Show months to goal or required savings
    const monthsElement = document.getElementById('savings-months');
    const requiredElement = document.getElementById('required-monthly');
    
    if (amountNeeded === 0) {
        monthsElement.textContent = 'Goal Reached! 🎉';
        monthsElement.style.color = '#10b981';
        requiredElement.parentElement.style.display = 'none';
    } else if (monthlyContribution > 0) {
        monthsElement.textContent = `${monthsToGoal} months`;
        monthsElement.style.color = '#1f2937';
        
        if (targetDate && monthsAvailable > 0) {
            requiredElement.textContent = formatCurrency(requiredMonthlySavings);
            requiredElement.parentElement.style.display = 'flex';
        } else {
            requiredElement.parentElement.style.display = 'none';
        }
    } else {
        monthsElement.textContent = 'Set monthly contribution';
        monthsElement.style.color = '#64748b';
        requiredElement.parentElement.style.display = 'none';
    }
    
    // Show result box
    const resultBox = document.getElementById('savings-result');
    resultBox.classList.remove('hidden');
    
    // Smooth scroll to results
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================
// HELPER FUNCTIONS
// ============================================

// Format number as currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

// Format number with commas
function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

// Validate number input
function validateNumberInput(input) {
    const value = parseFloat(input.value);
    if (isNaN(value) || value < 0) {
        input.value = '';
    }
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// FORM VALIDATION (Contact Form)
// ============================================
function validateContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // If validation passes, show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    document.getElementById('contact-form').reset();
    
    return false; // Prevent actual form submission for demo
}

// ============================================
// INITIALIZE
// ============================================
console.log('PennyExplained.com loaded successfully!');
