// Base interface for all listeners
export interface IListener {
  getChannelName(): string;
  handleNotification(payload: string): void;
}
