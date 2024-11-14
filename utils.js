import axios from "axios"
import toast from 'react-hot-toast';
import Icon from "./app/parts/icon";


export const render_children = (x, flat = false) => {
    x = x.length ? x : [x]
    return flat ? x.flat() : x
}

export function UpdateData(data,setter, onChange=() => ""){
	return (key,value) => {
		var l = {...data}
		if (!Object.keys(data).includes(key)){
			alert('wrong key')
		}
		l[key] = value
		setter(l)
		onChange()
		return [data[key],l[key]]
	}
}

export const RenameObj = (x, prevk, newk) => {
    x = {...x}
    if (x[prevk]){
        delete Object.assign(x, {[newk]: x[prevk] })[prevk]
    }
    return x
}

export const limit_text = (x, max) => {
    return x.length > max ? x.substr(0, max) + ' ...' : x
}

export const filter_keys = (x, exceptions = []) => {
    let d = {}
    Object.keys(x).map(r => {
        if (!exceptions.includes(r)) {
            d[r] = x[r]
        }
    })
    return d
}

export const component_render = (l) => {
    return l.map(r => {
        return <div className={`grid p-3 gap-3`} style={{ 'gridTemplateColumns': `repeat(auto-fit, minmax(${r.width}, 1fr))` }}>
            {r.content.map(r2 => {
                return r2
            })}
        </div>
    })
}

export const LazyAPI = ({ url, data = {}, el = undefined, isFataFetch=false, onSuccess = () => "", onFail = () => "", onProgress = () => "", successText=null, failText='مشکلی پیش اومد ...' }) => {
    const Progress = (status) => {
        if (document.querySelector("#progress-bar"))
            if (status == "show")
                document.querySelector("#progress-bar").classList.remove("hidden")
            else if (status == "hide")
                document.querySelector("#progress-bar").classList.add("hidden")
    }
    Progress('show')
    if (!isFataFetch){
        el.target.disabled = true
    }
    url = url.startsWith('/') ? url : url
    
    axios.get(url, data, {
        onUploadProgress: (progressEvent) => {
            onProgress((progressEvent.loaded / progressEvent.total) * 100)
        }
    }).then(r => {
        Progress('hide')
        if  (!isFataFetch){
            (successText ?? r.data.desc) ? toast.success(successText ?? r.data.desc) : ''
            el.target.disabled = false
        }
        const ok_res = onSuccess(r.data)
        ok_res ? toast.success(ok_res) : ''
    }).catch(r => {
        Progress('hide')
        if (!isFataFetch){
            (r.response.data.desc ?? failText) ? toast.error(r.response.data.desc ?? failText) : ''
            el.target.disabled = false
        }
        const nok_res = onFail(r.response.data)
        nok_res ? toast.error(nok_res) : ''
    })
}

export async function copyToClipBoard(text, textName){
	await navigator.clipboard.writeText(text);
	toast.success(`${textName} کپی شد`)
};

export function to_fa(x, return_obj=false){
	const d = {
		'teacher': 'معلم',
		'consultant': 'مشاور',
		'counselee': 'متقاضی مشاوره',
		'student': 'دانش آموز',
		'new_select_data': 'باکس سلکت جدید',
		'settlement': 'تسویه حساب',
		'report': 'گزارش',
		'personal_teacher': 'معلم خصوصی',
		'complaint': 'شکایت',
        'content': 'محتوا',
		"org_doc": 'مدرک آموزش و پرورش',
		"graduation_doc": 'مدرک فارغ التحصیلی',
		"university_card": 'کارت دانشجویی',
		"video": 'فیلم',
		"voice": 'صدا',
		"field": 'رشته',
		"charge-wallet": 'شارژ کیف پول',
		"pay-personal-teacher": 'معلم خصوصی',
		"buy-content": 'خرید محتوا',
		"ppt": 'پاورپوینت',
		"pdf": 'پی دی اف',
		"word": 'ورد',
		"school": 'مدرسه',
		"sample_question": 'نمونه سوال',
		"edu_content": 'محتوای آموزشی',
		"book_content": 'درسنامه',
		"qa": 'پرسش و پاسخ',
		"onlie_quiz": 'آزمون آنلاین',
	}
	if (return_obj)
		return d
	const res = d[x]
	return res
}

export const API = async ({ url, method="post", data = {}, onSuccess = () => "", onFail = () => "", onProgress = () => "" }) => {
    url = url.startsWith('/') ? process.env.URL + url : url
    try {
        method = method.toLowerCase() == "post" ? axios.post : axios.get
        const result = await method(url, data, {
            onUploadProgress: (progressEvent) => {
                onProgress((progressEvent.loaded / progressEvent.total) * 100)
            }
        })
        onSuccess(result.data)
        return result.data
    }
    catch (e) {
        onFail(e.response.data)
        return e.response.data
    }
    // const result = await fetch(url.startsWith('/') ? process.env.URL + url : url)
    // return await result.json()


}









