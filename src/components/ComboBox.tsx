import React, {FC, useState} from 'react';
import {Grommet, Select, ThemeContext, ThemeType,} from 'grommet';


const defaultOptions: any[] = [];
for (let i = 1; i <= 200; i += 1) {
    defaultOptions.push(`option ${i}`);
}

const selectTheme: ThemeType = {
    global: {
        colors: {
            brand: "rgb(2, 99, 224)"
        },
        focus: {
            outline: {
                color: "rgb(2, 99, 224)"
            }
        },
        hover: {
            background: "rgb(235, 244, 255)"
        },
        input: {
            padding: {
                vertical: "xsmall",
                horizontal: "xsmall"
            }
        }
    },
    select: {
        options: {
            container: {
                pad: {
                    vertical: "xsmall",
                    horizontal: "xsmall"
                }
            }
        }
    }
}

export type ComboBoxProps = {
    myTitle?: string
}
const ComboBox: FC<ComboBoxProps> = () => {
    const [options, setOptions] = useState(defaultOptions);
    const [value, setValue] = useState('');
    const [valueMultiple, setValueMultiple] = useState([]);
    return (
        <Grommet>
            <ThemeContext.Extend value={selectTheme}>
                <Select
                    size="small"
                    placeholder="Select single option"
                    value={value}
                    options={options}
                    onChange={({option}) => setValue(option)}
                    onClose={() => setOptions(defaultOptions)}
                    onSearch={text => {
                        // The line below escapes regular expression special characters:
                        // [ \ ^ $ . | ? * + ( )
                        const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

                        // Create the regular expression with modified value which
                        // handles escaping special characters. Without escaping special
                        // characters, errors will appear in the console
                        const exp = new RegExp(escapedText, 'i');
                        setOptions(defaultOptions.filter(o => exp.test(o)));
                    }}
                />
            </ThemeContext.Extend>
        </Grommet>
    );
};

export default ComboBox;
