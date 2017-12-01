class InverseCaptcha {
  solve(captcha) {
    if (!captcha && captcha !== '') {
      throw new Error('Invalid captcha input');
    }
    const circledCaptcha = `${captcha}${captcha[0]}`;

    const captchaDigits = circledCaptcha.split('').map((digit) => parseInt(digit, 10));
    
    return captchaDigits.reduce((sum, currentDigit, currentIndex) => {
      if (!currentIndex) {
        return sum;
      }

      if (currentDigit === captchaDigits[currentIndex - 1]) {
        sum += currentDigit;
      }

      return sum;
    }, 0)
  }
}
