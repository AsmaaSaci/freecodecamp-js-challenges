function checkStrength(password) {
    let rules = 0;
    if (password.length >= 8) rules++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) rules++;
    if (/\d/.test(password)) rules++;
    if (/[!@#$%^&*]/.test(password)) rules++;
    if (rules < 2) return "weak";
    if (rules < 4) return "medium";
    return "strong";
}
