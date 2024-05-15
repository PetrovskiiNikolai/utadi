class Device {
  private deviceId: number;

  constructor(deviceId: number) {
    this.deviceId = deviceId;
  }

  public getDeviceId(): number {
    return this.deviceId;
  }

  // Additional functionality can be added here
}

// Usage
const device = new Device(4323523);
console.log(`The device ID is: ${device.getDeviceId()}`);
