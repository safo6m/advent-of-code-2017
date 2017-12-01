class InverseCaptcha {
  _checkInputValidity(captcha) {
    if (!captcha && captcha !== '') {
      throw new Error('Invalid captcha input');
    }
  }

  _convertStringToDigits(value) {
    return value.split('').map((digit) => parseInt(digit, 10));
  }

  solveSimpleCaptcha(captcha) {
    this._checkInputValidity(captcha);

    const circledCaptcha = `${captcha}${captcha[0]}`;
    const captchaDigits = this._convertStringToDigits(circledCaptcha);
    
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

  solveHalfwayCaptcha(captcha) {
    this._checkInputValidity(captcha);

    const halfwayIndex = captcha.length / 2;
    
    const firstHalfOfCaptcha = captcha.slice(0, halfwayIndex);

    const circledCaptcha = `${captcha}${firstHalfOfCaptcha}`;
    const captchaDigits = this._convertStringToDigits(circledCaptcha);

    return captchaDigits.reduce((sum, currentDigit, currentIndex) => {
      if (!currentIndex) {
        return sum;
      }

      if (currentDigit === captchaDigits[currentIndex - halfwayIndex]) {
        sum += currentDigit;
      }

      return sum;
    }, 0)
  }
}
