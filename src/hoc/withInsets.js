import React from 'react';
import {SafeAreaConsumer} from 'react-native-safe-area-context'

const withInsets = (BaseComponent) => (props) => (
    <SafeAreaConsumer>
        {(insets) => (
            <BaseComponent
                insets={{ bottom: insets?.bottom }}
                {...props}
            />
        )}
    </SafeAreaConsumer>
);

export default withInsets;
