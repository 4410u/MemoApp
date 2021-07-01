import { useEffect } from 'react';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

export default function TrackingTransparency() {
  useEffect(() => {
    (async () => {
      const { status } = await requestTrackingPermissionsAsync();
      if (status === 'granted') {
        console.log('Yay! I have user permission to track data');
      }
    })();
  }, []);

  return (
    () => { }
  );
}
