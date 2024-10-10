import { createContext } from "react";

export const AppConfig = createContext({
    'setting': {
        'apiKey': '930dcfaa3e849eeafe00625b75791fd4',
        'language': 'eng',
        'metric': 'standard',
        'user': {
            'auto_refetch': true,
            'fetch_interval': 300000
        }
    },
    'setSettings': (e: any) => {}
  }) 