import {WeatherCode} from "./api-client";

export const sunnyEmoji = '☀️'
export const cloudEmoji = '☁️'
export const thunderCloudRainEmoji = '⛈️';
export const sunBehindCloudEmoji = '⛅';
export const sunBehindSmallCloudEmoji = '🌤️';
export const sunBehindLargeCloudEmoji = '🌥️';
export const sunBehindRainCloudEmoji = '🌦️';
export const cloudWithRainEmoji = '🌧️';
export const cloudWithSnowEmoji = '🌨️';
export const cloudWithLightningEmoji = '🌩️';
export const fogEmoji = '🌫️';
export const snowflakeEmoji = '❄️';
export const snowmanWithSnowEmoji = '☃️';

export type MeteoEmoji =
    typeof sunnyEmoji
    | typeof cloudEmoji
    | typeof thunderCloudRainEmoji
    | typeof sunBehindCloudEmoji
    | typeof sunBehindSmallCloudEmoji
    | typeof sunBehindLargeCloudEmoji
    | typeof sunBehindRainCloudEmoji
    | typeof cloudWithRainEmoji
    | typeof cloudWithSnowEmoji
    | typeof cloudWithLightningEmoji
    | typeof fogEmoji
    | typeof snowmanWithSnowEmoji;


const emojiCodeMapping: Record<WeatherCode, MeteoEmoji> = {
    0: sunnyEmoji,
    1: sunBehindSmallCloudEmoji,
    2: sunBehindCloudEmoji,
    3: sunBehindLargeCloudEmoji,
    45: fogEmoji,
    48: fogEmoji,
    51: cloudWithRainEmoji,
    53: cloudWithRainEmoji,
    55: cloudWithRainEmoji,
    56: cloudWithRainEmoji,
    57: cloudWithRainEmoji,
    61: cloudWithRainEmoji,
    63: cloudWithRainEmoji,
    65: cloudWithRainEmoji,
    66: sunBehindRainCloudEmoji,
    67: cloudWithRainEmoji,
    71: cloudWithSnowEmoji,
    73: cloudWithSnowEmoji,
    75: snowmanWithSnowEmoji,
    77: cloudWithSnowEmoji,
    80: sunBehindRainCloudEmoji,
    81: sunBehindRainCloudEmoji,
    82: sunBehindRainCloudEmoji,
    85: cloudWithSnowEmoji,
    86: cloudWithSnowEmoji,
    95: cloudWithLightningEmoji,
    96: cloudWithLightningEmoji,
    99: cloudWithLightningEmoji,
}

export const getEmojiFromWeatherCode = (code: WeatherCode): MeteoEmoji => {
    return emojiCodeMapping[code];
}
