export function inpt(VariableName, Input){
    let varname = VariableName
    if(!varname)  throw new Error(errorBase[2]);
    if(!Input)    throw new Error(errorBase[2]);
                  return `<script>const ${varname} = '${Input}';</script>\n`;
  }