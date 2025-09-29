import { useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/Card";
import { Input } from "../ui/Input";

export default function PaceCalculator() {
  const [activeTab, setActiveTab] = useState<"pace" | "time" | "distance">("pace");

  // inputs
  const [distance, setDistance] = useState("");
  const [distanceUnit, setDistanceUnit] = useState<"km" | "m" | "mi">("km");

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [paceValue, setPaceValue] = useState("");
  const [paceUnit, setPaceUnit] = useState<
    "perKm" | "perMile" | "mph" | "kmh" | "mMin" | "mSec"
  >("perKm");

  const [result, setResult] = useState<string | null>(null);

  // conversion helpers
  const toKm = (value: number, unit: "km" | "m" | "mi"): number => {
    if (unit === "km") return value;
    if (unit === "m") return value / 1000;
    if (unit === "mi") return value * 1.60934;
    return value;
  };

  const fromKm = (km: number, unit: "km" | "m" | "mi"): number => {
    if (unit === "km") return km;
    if (unit === "m") return km * 1000;
    if (unit === "mi") return km / 1.60934;
    return km;
  };

  const getTotalSeconds = () => {
    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;
    return h * 3600 + m * 60 + s;
  };

  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const calculate = () => {
    let output = "";

    if (activeTab === "pace") {
      // given time + distance => pace
      const distKm = toKm(parseFloat(distance), distanceUnit);
      const totalSec = getTotalSeconds();
      if (isNaN(distKm) || distKm <= 0 || totalSec <= 0) {
        setResult("Please enter valid inputs");
        return;
      }
      const secPerKm = totalSec / distKm;
      const paceMin = Math.floor(secPerKm / 60);
      const paceSec = Math.round(secPerKm % 60);
      output = `Pace: ${paceMin}:${paceSec < 10 ? "0" : ""}${paceSec} per km`;
    }

    if (activeTab === "time") {
      // given pace + distance => time
      const distKm = toKm(parseFloat(distance), distanceUnit);
      const pace = parseFloat(paceValue);
      if (isNaN(distKm) || distKm <= 0 || isNaN(pace) || pace <= 0) {
        setResult("Please enter valid inputs");
        return;
      }

      let totalSec = 0;
      switch (paceUnit) {
        case "perKm":
          totalSec = pace * 60 * distKm;
          break;
        case "perMile":
          totalSec = pace * 60 * (distKm / 1.60934);
          break;
        case "mph":
          totalSec = (distKm / pace) * 3600;
          break;
        case "kmh":
          totalSec = (distKm / pace) * 3600;
          break;
        case "mMin":
          totalSec = (distKm * 1000) / pace * 60;
          break;
        case "mSec":
          totalSec = (distKm * 1000) / pace;
          break;
      }

      output = `Estimated Time: ${formatTime(Math.round(totalSec))}`;
    }

    if (activeTab === "distance") {
      // given time + pace => distance
      const totalSec = getTotalSeconds();
      const pace = parseFloat(paceValue);
      if (totalSec <= 0 || isNaN(pace) || pace <= 0) {
        setResult("Please enter valid inputs");
        return;
      }

      let distKm = 0;
      switch (paceUnit) {
        case "perKm":
          distKm = totalSec / (pace * 60);
          break;
        case "perMile":
          distKm = (totalSec / (pace * 60)) * 1.60934;
          break;
        case "mph":
          distKm = (pace * totalSec) / 3600;
          break;
        case "kmh":
          distKm = (pace * totalSec) / 3600;
          break;
        case "mMin":
          distKm = (pace * totalSec) / 60 / 1000;
          break;
        case "mSec":
          distKm = (pace * totalSec) / 1000;
          break;
      }

      const finalDist = fromKm(distKm, distanceUnit);
      output = `Estimated Distance: ${finalDist.toFixed(2)} ${distanceUnit}`;
    }

    setResult(output);
  };

  const handleReset = () => {
    setDistance("");
    setHours("");
    setMinutes("");
    setSeconds("");
    setPaceValue("");
    setResult(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-aos="zoom-in">
      <CardHeader>
        <CardTitle className="text-center font-synonym font-bold mb-3">
          Pace Calculator
        </CardTitle>
        <CardDescription className="text-center font-satoshi">
          Estimate your pace, time, or distance
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Switch Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              variant={activeTab === "pace" ? "default" : "outline"} className="rounded-l-md rounded-r-none px-4 py-2"
              onClick={() => setActiveTab("pace")}
            >
              Pace
            </Button>
            <Button
              variant={activeTab === "time" ? "default" : "outline"} className="rounded-l-none rounded-r-none px-4 py-2"
              onClick={() => setActiveTab("time")}
            >
              Time
            </Button>
            <Button
              variant={activeTab === "distance" ? "default" : "outline"} className="rounded-l-none px-4 py-2"
              onClick={() => setActiveTab("distance")}
            >
              Distance
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Inputs */}
          {(activeTab === "pace" || activeTab === "time" || activeTab === "distance") && (
            <div>
              <label className="block text-sm font-medium mb-1">Distance</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Enter distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
                <select
                  value={distanceUnit}
                  onChange={(e) => setDistanceUnit(e.target.value as any)}
                  className="rounded-md border border-input bg-background px-2"
                >
                  <option value="km">km</option>
                  <option value="m">Meter</option>
                  <option value="mi">Miles</option>
                </select>
              </div>
            </div>
          )}

          {(activeTab === "pace" || activeTab === "distance") && (
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <div className="flex gap-2">
                <Input type="number" placeholder="hh" value={hours} onChange={(e) => setHours(e.target.value)} />
                <Input type="number" placeholder="mm" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                <Input type="number" placeholder="ss" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
              </div>
            </div>
          )}

          {(activeTab === "time" || activeTab === "distance") && (
            <div>
              <label className="block text-sm font-medium mb-1">Pace</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Enter pace"
                  value={paceValue}
                  onChange={(e) => setPaceValue(e.target.value)}
                />
                <select
                  value={paceUnit}
                  onChange={(e) => setPaceUnit(e.target.value as any)}
                  className="rounded-md border border-input bg-background px-2"
                >
                  <option value="perKm">Per km</option>
                  <option value="perMile">Per Miles</option>
                  <option value="mph">Miles Per Hour</option>
                  <option value="kmh">km Per Hour</option>
                  <option value="mMin">Meter Per Min</option>
                  <option value="mSec">Meter Per Sec</option>
                </select>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Button onClick={calculate}>Calculate</Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>

          {result && (
            <div className="mt-6 p-4 bg-muted rounded-md text-center">
              <h3 className="text-lg font-bold mb-2">Result</h3>
              <p>{result}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}