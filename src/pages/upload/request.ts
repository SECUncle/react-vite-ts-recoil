interface queryParams {
	url: string,
	method?: string,
	data: any,
	headers: any,
	onProgress?: any,
	requestList?: any,
}


export const request = ({
	url,
	method = 'post',
	data,
	headers = {},
	onProgress,
	requestList }: queryParams) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		//set headers
		Object.keys(headers).forEach((key) =>
			xhr.setRequestHeader(key, headers[key])
		);
		xhr.upload.onprogress = onProgress;
		xhr.send(data);
		xhr.onload = (e) => {
			if (e.currentTarget.status === 200) {
				if (requestList && requestList.length > 0) {
					let itemIndex = requestList.findIndex(
						(item) => item === xhr
					);
					requestList.splice(itemIndex, 1);
				}
				resolve({
					data: e.target.response,
				});
			} else {
				reject(new Error('上传失败'));
			}
		};
		xhr.onerror = () => {
			reject(new Error('网络好像出问题啦~'));
		};

		requestList?.push(xhr);
	});
};

export const uploadRequest = ({
	url,
	method = 'post',
	data,
	headers = {},
 }: queryParams) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.open(method, url);
		//set headers
		Object.keys(headers).forEach((key) =>
			xhr.setRequestHeader(key, headers[key])
		);
		xhr.send(data);
		xhr.onload = (e) => {
			if (e.currentTarget.status === 200) {
				resolve({
					data: e.target.response,
				});
			} else {
				reject(new Error('上传失败'));
			}
		};
		xhr.onerror = () => {
			reject(new Error('网络好像出问题啦~'));
		};

	});
};

// step5

// step6

// step7

// step8

