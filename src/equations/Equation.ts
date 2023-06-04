type VariableMap = { [variable: string]: number };

export class Equation {
    readonly Equation: string;
    constructor (equation: string, variables: string[]) {
        this.Equation = equation;
    }

    evaluate(variables: VariableMap): number {
        const variableNames = Object.keys(variables);
        
        // Replace variable names with their corresponding values in the equation string
        let evaluatedEquation = this.Equation;
        for (const variable of variableNames) {
          const value = variables[variable];
          evaluatedEquation = evaluatedEquation.replace(new RegExp(variable, 'g'), value.toString());
        }
        
        // Evaluate the equation using JavaScript's built-in `eval()` function
        return eval(evaluatedEquation);
      }
}