define([
  "math/addition",
  "math/subtraktion",
  "math/multiply",
  "math/divide",
  "lodash"
], function(add, sub, multi, divide, _) {
  "use strict";

  /* #region _universalHistory[] */
  /**
   * Description:
   * Every instance of Taschenrechner has access to this array. (But only instances of Taschenrechner)
   * Safes history of all calculations of all Taschenrechner-Instances
   */
  /* #endregion */
  const _universalHistory = [];

  /* #region _number1 */
  /**
   * Description:
   * Stores the first number.
   * Key: Object (instance of Taschenrechner)
   * Value: Number
   */
  /* #endregion */
  const _number1 = new WeakMap();

  /* #region _number2 */
  /**
   * Description:
   * Stores the second number.
   * Key: Object (instance of Taschenrechner)
   * Value: Number
   */
  /* #endregion */
  const _number2 = new WeakMap();

  /* #region _localHistory */
  /**
   * Description:
   * Stores the history of a single Taschenrechner instance as Array.
   * Key: Object (instance of Taschenrechner)
   * Value: Array
   */
  /* #endregion */
  const _localHistory = new WeakMap();

  class Taschenrechner {
    constructor(number1, number2) {
      this.number1 = number1;
      this.number2 = number2;
      _localHistory.set(this, []);
    }
    set number1(number) {
      _number1.set(this, typeof number === "number" ? number : 0);
    }
    get number1() {
      return _number1.get(this);
    }
    set number2(number) {
      _number2.set(this, typeof number === "number" ? number : 0);
    }
    get number2() {
      return _number2.get(this);
    }

    /* #region addToHistories() */
    /**
     * Description:
     * Adds an object that contains information of an mathematical operation to the history of the instance and to the universal history
     */
  /* #endregion */
    addToHistories(number1, number2, method) {
      let historyObj = { n1: number1, n2: number2, method: method };
      _localHistory.get(this).push(historyObj);
      _universalHistory.push(historyObj);
    }

    get sum() {
      this.addToHistories(this.number1, this.number2, "addition");
      return add(_number1.get(this), _number2.get(this));
    }

    get difference() {
      this.addToHistories(
        this.number1,
        this.number2,
        "substraction"
      );
      return sub(_number1.get(this), _number2.get(this));
    }

    get product() {
      this.addToHistories(
        this.number1,
        this.number2,
        "multiplication"
      );
      return multi(_number1.get(this), _number2.get(this));
    }

    get quotient() {
      this.addToHistories(this.number1, this.number2, "division");
      return divide(_number1.get(this), _number2.get(this));
    }

    get last() {
      let history = _localHistory(this).slice();
      return history[history.length - 1];
    }

    get history() {
      return _.uniqWith(_localHistory.get(this), _.isEqual);
    }

    get universalHistory() {
      return _.uniqWith(_universalHistory, _.isEqual);
    }
  }

  return function(number1, number2) {
    return new Taschenrechner(number1, number2);
  };
});
