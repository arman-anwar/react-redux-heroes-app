// import { delay } from 'redux-saga'
import { takeEvery, put, delay } from 'redux-saga/effects';
import { ADD_HERO_ASYNC, ADD_HERO } from '../actions/types'

function* addHeroAsync(action) {
    yield delay(4000);
    // console.log('ADD_HERO', 'this is from saga', action);
    yield put({ type: ADD_HERO_ASYNC, payload: action.payload });
}

export function* watchHeros() {
    yield takeEvery(ADD_HERO, addHeroAsync);

}
