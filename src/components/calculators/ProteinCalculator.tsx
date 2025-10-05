import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../ui/Card';
import { Input } from '../ui/Input';

export default function ProteinCalculator() {
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'us'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState<
    'sedentary' | 'moderate' | 'active'
  >('moderate');
  const [goal, setGoal] = useState<'maintain' | 'lose' | 'gain'>('maintain');
  const [protein, setProtein] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    setLastUpdated(now.toLocaleString());
  }, []);

  const handleUnitSwitch = (newUnit: 'metric' | 'us') => {
    const weightValue = parseFloat(weight);
    if (isNaN(weightValue)) {
      setUnit(newUnit);
      return;
    }

    let converted = weightValue;

    if (unit !== newUnit) {
      if (newUnit === 'us') {
        converted = weightValue * 2.20462; // kg → lbs
      } else {
        converted = weightValue / 2.20462; // lbs → kg
      }
    }

    setWeight(converted.toFixed(1));
    setUnit(newUnit);
  };

  const calculateProtein = () => {
    const weightValue = parseFloat(weight);
    const userAge = parseInt(age);

    if (
      isNaN(weightValue) ||
      isNaN(userAge) ||
      weightValue <= 0 ||
      userAge <= 0
    ) {
      setProtein(null);
      return;
    }

    // Convert to kg if in lbs
    const weightKg = unit === 'us' ? weightValue / 2.20462 : weightValue;

    let multiplier = 0.8;
    if (activityLevel === 'moderate') multiplier = 1.2;
    else if (activityLevel === 'active') multiplier = 1.6;

    if (goal === 'lose') multiplier += 0.2;
    else if (goal === 'gain') multiplier += 0.4;

    const result = weightKg * multiplier;
    setProtein(parseFloat(result.toFixed(1)));
  };

  const handleReset = () => {
    setAge('');
    setWeight('');
    setGender('male');
    setActivityLevel('moderate');
    setGoal('maintain');
    setProtein(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">
          Protein Calculator
        </CardTitle>
        <CardDescription className="text-center font-satoshi">
          Calculate your daily recommended protein intake
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={unit === 'metric' ? 'default' : 'outline'}
                className={`rounded-l-md rounded-r-none px-4 py-2 ${unit === 'metric' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => handleUnitSwitch('metric')}
              >
                Metric Units
              </Button>
              <Button
                variant={unit === 'us' ? 'default' : 'outline'}
                className={`rounded-r-md rounded-l-none px-4 py-2 ${unit === 'us' ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => handleUnitSwitch('us')}
              >
                US Units
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <Input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Weight ({unit === 'us' ? 'lbs' : 'kg'})
            </label>
            <Input
              type="number"
              placeholder={`Enter weight in ${unit === 'us' ? 'lbs' : 'kg'}`}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Activity Level
            </label>
            <select
              value={activityLevel}
              onChange={(e) =>
                setActivityLevel(
                  e.target.value as 'sedentary' | 'moderate' | 'active'
                )
              }
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="sedentary">Sedentary</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Fitness Goal
            </label>
            <select
              value={goal}
              onChange={(e) =>
                setGoal(e.target.value as 'maintain' | 'lose' | 'gain')
              }
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="maintain">Maintain</option>
              <option value="lose">Lose Fat</option>
              <option value="gain">Gain Muscle</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button onClick={calculateProtein} disabled={!age || !weight}>
              Calculate
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {protein !== null && (
            <div className="mt-6 p-4 bg-muted rounded-md text-center">
              <h3 className="text-lg font-medium mb-2">
                Daily Protein Requirement
              </h3>
              <p className="text-2xl font-bold">{protein} grams</p>
              <p className="text-xs text-muted-foreground mt-2">
                Based on weight, activity, and fitness goal.
              </p>
            </div>
          )}

          <div className="text-xs text-muted-foreground text-center mt-4">
            <p>Last updated: {lastUpdated}</p>
            <p className="mt-1">Note: Unit conversion handled automatically.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
