export interface ITodo {
    id: String,
    title: String,
    isDone: Boolean,
};

export interface ActionType {
    readonly type: String,
    payload: any,
}