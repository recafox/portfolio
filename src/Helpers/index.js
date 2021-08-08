import { root } from "../Constants/url";

export const getImagePath = (imgID) => {
  return `${root}/image/${imgID}`;
};

/**
 * 轉換時間
 * @param {string} timeString 2020-06-08T00:00:00.000Z
 * @example
 * // return 2020-06-08
 * getTime('2020-06-08T00:00:00.000Z');
 * @returns {string} return YYYY-MM-DD
 */
export const getTime = (timeString) => {
  return timeString.split("T")[0];
};

/**
 * 若endDate仍未到, 顯示"在職中"
 * @param {string} timeString 2220-06-08T00:00:00.000Z
 * @example
 * // return "在職中"
 * getEndTime("2220-06-08T00:00:00.000Z")
 * @returns {string} return YYYY-MM-DD or "在職中"
 */
export const getEndTime = (timestring) => {
  const now = new Date().getTime();
  const converted = new Date(getTime(timestring)).getTime();

  if (converted > now) {
    return "在職中";
  }
  return getTime(timestring);
};
