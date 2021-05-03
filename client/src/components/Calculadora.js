import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import core from "./calculadora-macro.js";

export default class Macro extends React.Component {
  constructor() {
    super();

    this.state = {
      params: {
        gender: core.Gender.FEMALE,
        age: 35,
        weight: 66,
        weightlb: 77,
        bodyfat: 26,
        height: 160,
        activityLevel: 0.5,
        netCarbs: 30,
        lbs: false,
        kgs: true,
        cmsToggle: true,
        inchesToggle: false,
        feet: 0,
        inches: 0,
      },
      others: {
        calorieAdjustment: -10,
      },
    };
  }

  updateParams(newValue) {
    this.setState({ params: newValue });
  }

  updateOthers(newValue) {
    this.setState({ others: newValue });
  }

  handleWeightToggle(e) {
    e.preventDefault();
    this.setState({
      kgs: !this.state.kg,
      lbs: !this.state.lbs,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Calculadora de Macronutrientes </h1>
        <p>
        Te presentamos la mejor calculadora de macronutrientes GRATUITA. Te permite calcular los macros necesarios para seguir el estilo de alimentación cetogénica (keto), o si prefieres, puedes escoger o personalizar la opción que se ajuste al estilo de alimentación que prefieras.
</p>
<p>Con esta herramienta podrás calcular la cantidad de grasas, proteínas y carbohidratos que debes consumir al día para alcanzar tus objetivos. La grasa tiene 9 calorías por gramo, y las proteínas y los carbohidratos tienen 4 calorías por gramo.
</p>

<p>Complete su información a continuación para saber cuántas calorías, carbohidratos, proteínas y grasas debe consumir por día para alcanzar sus objetivos, ya sea que quiera ganar masa muscular, mantenerse o perder peso. </p>
        <p>
          Inspirado en{" "}
          <a
            target="_blank"
            href="http://ketodietapp.com/Blog/page/KetoDiet-Buddy"
          >
            KetoDiet Calculator
          </a>{" "}
        </p>

        <h2>Ingresa tu informacion</h2>
        <InputForm
          params={this.state.params}
          others={this.state.others}
          updateParams={this.updateParams.bind(this)}
          updateOthers={this.updateOthers.bind(this)}
        />
        <h3>Results</h3>
        <Results params={this.state.params} others={this.state.others} />
      </div>
    );
  }
}

class InputForm extends React.Component {
  lbsToKg = (lbs) => {
    var kg = Math.round(lbs / 2.2046);
    return kg;
  };

  updateGender(newValue) {
    this.props.params.gender =
      newValue === core.Gender.MALE ? core.Gender.MALE : core.Gender.FEMALE;
    this.props.updateParams(this.props.params);
  }
  updateAge(newValue) {
    this.props.params.age = newValue;
    this.props.updateParams(this.props.params);
  }
  updateWeight(newValue) {
    this.props.params.weight = newValue;
    this.props.updateParams(this.props.params);
  }
  updateWeightlb(newValue) {
    this.props.params.weightlb = newValue;
    this.props.updateParams(this.props.params);
  }

  updateHeightInches(newValue) {
    this.props.params.inches = newValue;
    this.props.updateParams(this.props.params);
  }
  updateHeightFeet(newValue) {
    this.props.params.feet = newValue;
    this.props.updateParams(this.props.params);
  }
  updateHeight(newValue) {
    this.props.params.height = newValue;
    this.props.updateParams(this.props.params);
  }
  updateActivityLevel(newValue) {
    this.props.params.activityLevel = newValue;
    this.props.updateParams(this.props.params);
  }
  updateBodyfat(newValue) {
    this.props.params.bodyfat = newValue;
    this.props.updateParams(this.props.params);
  }
  updateNetCarbs(newValue) {
    this.props.params.netCarbs = newValue;
    this.props.updateParams(this.props.params);
  }
  updateCalorieAdjustment(newValue) {
    this.props.others.calorieAdjustment = newValue;
    this.props.updateOthers(this.props.others);
  }

  updateWeightToggle() {
    this.props.params.lbs = !this.props.params.lbs;
    this.props.params.kgs = !this.props.params.kgs;
    this.props.updateParams(this.props.params);
  }
  updateHeightToggle() {
    this.props.params.cmsToggle = !this.props.params.cmsToggle;
    this.props.params.inchesToggle = !this.props.params.inchesToggle;
    this.props.updateParams(this.props.params);
  }

  render() {
    return (
      <div className="">
        <form onsubmit="return false;">
          <div className="form-row">
            <div className="col">
              <InputFormGenderField
                fieldId="gender"
                value={this.props.params.gender}
                updateValue={this.updateGender.bind(this)}
              />
            </div>
            <div className="col">
              <InputFormNumberField
                fieldId="age"
                title="Edad"
                value={this.props.params.age}
                updateValue={this.updateAge.bind(this)}
              />
            </div>
            <div className="col">
              <InputFormWeightField
                fieldId="metric"
                libra={this.props.params.lbs}
                kilos={this.props.params.kgs}
                updateValue={this.updateWeightToggle.bind(this)}
              />
              {this.props.params.kgs && (
                <InputFormNumberField
                  fieldId="weight"
                  title="Peso (Kilos)"
                  value={this.props.params.weight}
                  updateValue={this.updateWeight.bind(this)}
                />
              )}
              {this.props.params.lbs && (
                <InputFormNumberField
                  fieldId="weightlb"
                  title="Peso (Libras)"
                  value={this.props.params.weightlb}
                  updateValue={this.updateWeightlb.bind(this)}
                />
              )}
            </div>
          </div>

          <InputFormNumberField
            fieldId="bodyfat"
            title="Grasa Corporal (%)"
            value={this.props.params.bodyfat}
            updateValue={this.updateBodyfat.bind(this)}
          />
          <InputFormHeightField
            fieldId="metric2"
            cmsToggle={this.props.params.cmsToggle}
            inchesToggle={this.props.params.inchesToggle}
            updateValue={this.updateHeightToggle.bind(this)}
          />
          {this.props.params.inchesToggle && (
            <InputFormNumberField
              fieldId="feet"
              title="Altura (Pies)"
              value={this.props.params.feet}
              updateValue={this.updateHeightFeet.bind(this)}
            />
          )}
          {this.props.params.inchesToggle && (
            <InputFormNumberField
              fieldId="inches"
              title="Altura (pulgadas)"
              value={this.props.params.inches}
              updateValue={this.updateHeightInches.bind(this)}
            />
          )}
          {this.props.params.cmsToggle && (
            <InputFormNumberField
              fieldId="height"
              title="Altura (cm)"
              value={this.props.params.height}
              updateValue={this.updateHeight.bind(this)}
            />
          )}
          <InputFormNumberField
            fieldId="activityLevel"
            title="Nivel de Actividad (0 - 1)"
            value={this.props.params.activityLevel}
            updateValue={this.updateActivityLevel.bind(this)}
          />
          <InputFormNumberField
            fieldId="netCarbs"
            title="Limite Carbohidratos Netos(g)"
            value={this.props.params.netCarbs}
            updateValue={this.updateNetCarbs.bind(this)}
          />

          <InputFormNumberField
            fieldId="calorieAdjustment"
            title="Ajuste de calorias (%)"
            value={this.props.others.calorieAdjustment}
            updateValue={this.updateCalorieAdjustment.bind(this)}
          />
        </form>
      </div>
    );
  }
}

class InputFormNumberField extends React.Component {
  update(event) {
    try {
      if (this.props.conversion) {
        var newValue = parseFloat(event.target.value);
        var kg = Math.round(newValue / 2.2046);
        this.props.updateValue(kg);
      } else {
        var newValue = parseFloat(event.target.value);
        this.props.updateValue(newValue);
      }
    } catch (ex) {
      console.error(ex);
    }
  }

  toNumber(value) {
    return isNaN(value) || value === undefined ? 0 : value;
  }

  render() {
    return (
      <div className="form-group">
        <h3>{this.props.title}:</h3>
        {/* <label for={this.props.fieldId}>{this.props.title}</label> */}
        <input
          type="text"
          className="form-control"
          id={this.props.fieldId}
          value={this.toNumber(this.props.value)}
          onChange={this.update.bind(this)}
        />
      </div>
    );
  }
}

class InputFormGenderField extends React.Component {
  update(event) {
    try {
      var newValue = parseInt(event.target.value);
      this.props.updateValue(newValue);
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    var idFemale = this.props.fieldId + "_female";
    var idMale = this.props.fieldId + "_male";

    return (
      <div>
        <h3>Sexo:</h3>
        <div className=" form-check">
          <input
            className="form-check-input"
            type="radio"
            name={idFemale}
            value={core.Gender.FEMALE}
            checked={this.props.value === core.Gender.FEMALE}
            onChange={this.update.bind(this)}
          />
          <label className="form-check-label" or={idFemale}>
            Female
          </label>
        </div>
        <div className=" form-check">
          <input
            className="form-check-input"
            type="radio"
            id={idMale}
            value={core.Gender.MALE}
            checked={this.props.value === core.Gender.MALE}
            onChange={this.update.bind(this)}
          />
          <label className="form-check-label" for={idMale}>
            Male
          </label>
        </div>
      </div>
    );
  }
}

class InputFormWeightField extends React.Component {
  update(e) {
    console.log(this.props.kilos);
    e.preventDefault();
    this.props.updateValue();
  }
  render() {
    var idKg = this.props.fieldId + "_kg";
    var idLb = this.props.fieldId + "_lb";

    return (
      <div className="form-group">
        <button
          type="button"
          href="#"
          id="kgsbutton"
          name={idKg}
          onClick={this.update.bind(this)}
          disabled={this.props.kilos}
        >
          Kgs
        </button>
        <button
          type="button"
          href="#"
          id="lbsbutton"
          name={idLb}
          onClick={this.update.bind(this)}
          disabled={this.props.libra}
        >
          Lbs
        </button>
      </div>
    );
  }
}

class InputFormHeightField extends React.Component {
  update(e) {
    e.preventDefault();
    this.props.updateValue();
  }
  render() {
    var idCms = this.props.fieldId + "_Cms";
    var idInch = this.props.fieldId + "_Inch";

    return (
      <div className="form-group">
        <button
          type="button"
          href="#"
          id="kgsbutton"
          name={idCms}
          onClick={this.update.bind(this)}
          disabled={this.props.cmsToggle}
        >
          Cms
        </button>
        <button
          type="button"
          href="#"
          id="lbsbutton"
          name={idInch}
          onClick={this.update.bind(this)}
          disabled={this.props.inchesToggle}
        >
          Pies/Pulgadas
        </button>
      </div>
    );
  }
}

class Results extends React.Component {
  render() {
    try {
      var kdb = new core.KetoDietBuddy(this.props.params);
      var result = kdb.calculateCalorieIntake(
        this.props.others.calorieAdjustment
      );
      var textResult = JSON.stringify(result, null, 4);

      var calorieAdjustment =
        result.adjustment < 0
          ? -result.adjustment + "% deficit"
          : result.adjustment + "% surplus";
      var warnings = "";
      if (
        (result.warnings & core.Warnings.LOW_BODYFAT) ==
        core.Warnings.LOW_BODYFAT
      ) {
        warnings += "Bodyfat too low, ";
      }
      if (
        (result.warnings & core.Warnings.LOW_CALORIES) ==
        core.Warnings.LOW_CALORIES
      ) {
        warnings += "Calorie intake too low, ";
      }
      if (
        (result.warnings & core.Warnings.LOW_FATGRAMS) ==
        core.Warnings.LOW_FATGRAMS
      ) {
        warnings += "Fat intake too low, ";
      }
      if (
        (result.warnings & core.Warnings.HIGH_CARBS) ==
        core.Warnings.HIGH_CARBS
      ) {
        warnings += "Carb intake too high, ";
      }

      if (warnings.length == 0) {
        warnings = "none -- all good";
      }

      return (
        <div className="form-group">
          <table>
            <tbody>
              <ResultsSectionItem
                name="Calorie Desirable Adjustment"
                value={calorieAdjustment}
              />
              <ResultsSectionItem name="Warnings" value={warnings} />
            </tbody>
          </table>
          <h4>
            Calculated Basal Metabolic Rate (BMR): {Math.round(kdb.bmr)} kcal
          </h4>
          <h4>Minimum</h4>
          <ResultsSection result={result.minimum} />
          <h4>Maintenance</h4>
          <ResultsSection result={result.maintenance} />
          <h4>Desirable</h4>
          <ResultsSection result={result.desirable} />
          {/* <h4>Raw Results Object</h4>
                    <textarea readOnly cols="64" rows="40" value={textResult} /> */}
        </div>
      );
    } catch (ex) {
      return (
        <div>
          <p>Calcular tus macronutrientes es el primer paso importante en tu viaje hacia el éxito con el estilo de alimentación cetogénico. Tienes la opción de tomar una ruta más fácil, y limitarte a consumir entre 20 a 30 gramos máximos de carbohidratos al día, o con la ayuda de nuestra calculadora, podrías ser más estricto con la ingesta de proteínas, grasas y calorías. Haz lo que funcione para ti y tus objetivos.</p>
          <textarea readOnly cols="64" rows="42" value={ex} />
        </div>
      );
    }
  }
}

class ResultsSection extends React.Component {
  render() {
    var energy = this.props.result.energy + " kcal";
    var macroGrams =
      this.props.result.gramsFat +
      "g, " +
      this.props.result.gramsProtein +
      "g, " +
      this.props.result.gramsNetCarbs +
      "g";
    var macroEnergy =
      this.props.result.energyFat +
      " kcal, " +
      this.props.result.energyProtein +
      " kcal, " +
      this.props.result.energyNetCarbs +
      " kcal";
    var macroPercEnergy =
      this.props.result.percEnergyFat +
      "%, " +
      this.props.result.percEnergyProtein +
      "%, " +
      this.props.result.percEnergyNetCarbs +
      "%";

    return (
      <table>
        <tbody>
          <ResultsSectionItem name="Energy" value={energy} />
          <ResultsSectionItem
            name="Fat/ Protein/ Net Carbs grams"
            value={macroGrams}
          />
          <ResultsSectionItem
            name="Fat/ Protein/ Net Carbs energy"
            value={macroEnergy}
          />
          <ResultsSectionItem
            name="Fat/ Protein/ Net Carbs %"
            value={macroPercEnergy}
          />
        </tbody>
        
      </table>
      

      
    );
  }
}

class ResultsSectionItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.value}</td>
      </tr>


    );
  }
}
