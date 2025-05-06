import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormPageTitle from '@/components/text/FormPageTitle';
import colors from '@/constants/colors';

interface StepProgressIndicatorProps {
  title: string;
  currentStep: number;
  totalStep: number;
}

function StepProgressIndicator({
  currentStep,
  totalStep,
  title,
}: Readonly<StepProgressIndicatorProps>) {
  return (
    <View style={styles.container}>
      <FormPageTitle text={title} />
      <Text style={styles.text}>
        Langkah {currentStep} dari {totalStep}
      </Text>
      <View style={styles.progressBar}>
        {[...Array(totalStep)].map((_, index) => (
          <View
            key={index + 1}
            style={[
              styles.progress,
              { opacity: index < currentStep ? 1 : 0.25 },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#848484',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progress: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.C06,
  },
});

export default StepProgressIndicator;
