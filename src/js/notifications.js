import { success, notice, error, info, defaults } from '@pnotify/core';

function noticeNull() {
  notice({
    title: 'Warning',
    text: 'Please, type country to show',
  });
}

function noticeError() {
  error({
    title: 'Error',
    text: 'Too many matches found. Please enter a more specific query',
  });
}

function noticeProgress() {
  info({
    title: 'Information',
    text: 'Please, keep searching...',
  });
}

function noticeSuccess() {
  success({
    title: 'Success',
    text: 'The search proceeded successfully',
  });
}

function setDefaultsDelay(delay) {
  defaults.delay = delay;
}

export { noticeError, noticeNull, noticeProgress, noticeSuccess, setDefaultsDelay };
