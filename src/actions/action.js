import fetch from 'isomorphic-fetch'

export const add = 'add'
export function getToDoAction(todo) {
	return {type: add, todo: todo}
}

export function addTextAction(text){
	return dispatch => {
		return fetch('/v1/todo', {
			method: 'post',
			credentials: 'include', //配置cookie来获取session
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				text: text
			})
		}).then(function(response){
			return response.json()
		}).then(function(json){
			if(!json.success){
				console.log(json.error)
			}else{
				dispatch(getToDoAction(json.data))
			}
		}).catch(function(err){
			console.log(err)
		})
	}
}