{"version":3,"sources":["starter.js"],"names":["BX","namespace","Bizproc","Starter","increment","onAjaxFailure","window","alert","message","Manager","instances","put","starter","this","push","findSimilar","target","result","i","length","ins","moduleId","entity","documentType","fireEvent","event","parameters","onCustomEvent","config","id","templates","documentId","ajaxUrl","singleStart","cb","type","isFunction","addCustomEvent","hasParameters","showParametersPopup","templateId","title","templateName","startWorkflow","prototype","showTemplatesMenu","buttonNode","loadTemplates","showTemplatesPopupMenu","bind","me","template","menuItem","menuItems","onMenuClick","e","item","popupWindow","close","preventDefault","onTemplateMenuItemClick","text","util","htmlspecialchars","onclick","showEmptyTemplatesHint","PopupMenu","show","closeByEsc","zIndex","autoHide","node","popupHint","PopupWindow","lightShadow","darkMode","offsetLeft","angle","position","offset","bindOptions","events","onPopupClose","destroy","content","create","attrs","style","callback","callAction","data","template_id","params","isPlainObject","loadParametersHtml","html","popup","wrapper","form","querySelector","startButton","prepareParametersForm","buttons","remove","PopupWindowButton","className","click","addClassName","submitParametersForm","response","removeClassName","success","width","closeIcon","titleBar","Text","decode","draggable","restrict","PopupWindowButtonLink","showAutoStartParametersPopup","execType","showForm","isDomNode","firstChild","contentNode","auto_execute_type","bitrix_sessid","ajax","method","dataType","url","onsuccess","onfailure","action","appendChild","name","value","__requestInProgress","formData","FormData","preparePost","errors","join","actionName"],"mappings":"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","file":"starter.map.js"}