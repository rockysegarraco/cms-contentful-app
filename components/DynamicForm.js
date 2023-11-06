// this is static hack - still waiting on on update from Formassembly support
// for a more elegant solution
// The main benefit is that this is a no-iframe solution so we can make the form submit redirect to a another pageon the site.
function FormDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!-- FORM: HEAD SECTIONS -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="referrer" content="no-referrer-when-downgrade">
<!-- THIS SCRIPT NEEDS TO BE LOADED FIRST BEFORE wforms.js -->
<script type="text/javascript" data-for="FA__DOMContentLoadedEventDispatch"
	src="https://www.tfaforms.com/js/FA__DOMContentLoadedEventDispatcher.js" defer></script>
<style>
	.captcha {
		padding-bottom: 1em !important;
	}

	.wForm .captcha .oneField {
		margin: 0;
		padding: 0;
	}
</style>
<script type="text/javascript">
	// initialize our variables
                    var captchaReady = 0;
                    var wFORMSReady = 0;
                    var isConditionalSubmitEnabled = false;

                    // when wForms is loaded call this
                    var wformsReadyCallback = function () {
                        // using this var to denote if wForms is loaded
                        wFORMSReady = 1;
                        isConditionalSubmitEnabled = document.getElementById('submit_button').hasAttribute('data-condition');
                        // call our recaptcha function which is dependent on both
                        // wForms and an async call to google
                        // note the meat of this function wont fire until both
                        // wFORMSReady = 1 and captchaReady = 1
                        onloadCallback();
                    }
                    var gCaptchaReadyCallback = function() {
                        // using this var to denote if captcha is loaded
                        captchaReady = 1;
                        isConditionalSubmitEnabled = document.getElementById('submit_button').hasAttribute('data-condition');
                        // call our recaptcha function which is dependent on both
                        // wForms and an async call to google
                        // note the meat of this function wont fire until both
                        // wFORMSReady = 1 and captchaReady = 1
                        onloadCallback();
                    };

                    // add event listener to fire when wForms is fully loaded
                    document.addEventListener("wFORMSLoaded", wformsReadyCallback);

                    var enableSubmitButton = function() {
                        var submitButton = document.getElementById('submit_button');
                        var explanation = document.getElementById('disabled-explanation');
                        var isConditionalSubmitConditionMet = wFORMS.behaviors.condition.isConditionalSubmitConditionMet;
                        if (
                            submitButton != null &&
                            (isConditionalSubmitEnabled && isConditionalSubmitConditionMet) ||
                            !isConditionalSubmitEnabled
                        )
                        {
                            submitButton.removeAttribute('disabled');
                            if (explanation != null) {
                                explanation.style.display = 'none';
                            }
                        }
                    };
                    var disableSubmitButton = function() {
                        var submitButton = document.getElementById('submit_button');
                        var explanation = document.getElementById('disabled-explanation');
                        if (submitButton != null) {
                            submitButton.disabled = true;
                            if (explanation != null) {
                                explanation.style.display = 'block';
                            }
                        }
                    };

                    // call this on both captcha async complete and wforms fully
                    // initialized since we can't be sure which will complete first
                    // and we need both done for this to function just check that they are
                    // done to fire the functionality
                    var onloadCallback = function () {
                        // if our captcha is ready (async call completed)
                        // and wFORMS is completely loaded then we are ready to add
                        // the captcha to the page
                        if (captchaReady && wFORMSReady) {
                                grecaptcha.enterprise.render('g-recaptcha-render-div', {
                                'sitekey': '6LfMg_EaAAAAAMhDNLMlgqDChzmtYHlx1yU2y7GI',
                                'theme': 'light',
                                'size': 'normal',
                                'callback': 'enableSubmitButton',
                                'expired-callback': 'disableSubmitButton'
                            })
                            var oldRecaptchaCheck = parseInt('1');
                            if (oldRecaptchaCheck === -1) {
                                var standardCaptcha = document.getElementById("tfa_captcha_text");
                                standardCaptcha = standardCaptcha.parentNode.parentNode.parentNode;
                                standardCaptcha.parentNode.removeChild(standardCaptcha);
                            }

                            if (!wFORMS.instances['paging']) {
                                document.getElementById("g-recaptcha-render-div").parentNode.parentNode.parentNode.style.display = "block";
                                //document.getElementById("g-recaptcha-render-div").parentNode.parentNode.parentNode.removeAttribute("hidden");
                            }
                            document.getElementById("g-recaptcha-render-div").getAttributeNode('id').value = 'tfa_captcha_text';

                            var captchaError = '';
                            if (captchaError == '1') {
                                var errMsgText = 'The CAPTCHA was not completed successfully.';
                                var errMsgDiv = document.createElement('div');
                                errMsgDiv.id = "tfa_captcha_text-E";
                                errMsgDiv.className = "err errMsg";
                                errMsgDiv.innerText = errMsgText;
                                var loc = document.querySelector('.g-captcha-error');
                                loc.insertBefore(errMsgDiv, loc.childNodes[0]);

                                /* See wFORMS.behaviors.paging.applyTo for origin of this code */
                                if (wFORMS.instances['paging']) {
                                    var b = wFORMS.instances['paging'][0];
                                    var pp = base2.DOM.Element.querySelector(document, wFORMS.behaviors.paging.CAPTCHA_ERROR);
                                    if (pp) {
                                        var lastPage = 1;
                                        for (var i = 1; i < 100; i++) {
                                            if (b.behavior.isLastPageIndex(i)) {
                                                lastPage = i;
                                                break;
                                            }
                                        }
                                        b.jumpTo(lastPage);
                                    }
                                }
                            }
                        }
                    }
</script>
<script src='https://www.google.com/recaptcha/enterprise.js?onload=gCaptchaReadyCallback&render=explicit&hl=en_US' async
	defer></script>
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function() {
                        var warning = document.getElementById("javascript-warning");
                        if (warning != null) {
                            warning.parentNode.removeChild(warning);
                        }
                        var oldRecaptchaCheck = parseInt('1');
                        if (oldRecaptchaCheck !== -1) {
                            var explanation = document.getElementById('disabled-explanation');
                            var submitButton = document.getElementById('submit_button');
                            if (submitButton != null) {
                                submitButton.disabled = true;
                                if (explanation != null) {
                                    explanation.style.display = 'block';
                                }
                            }
                        }
                    });
</script>
<script type="text/javascript">
	document.addEventListener("FA__DOMContentLoaded", function(){
            const FORM_TIME_START = Math.floor((new Date).getTime()/1000);
            let formElement = document.getElementById("tfa_0");
            if (null === formElement) {
                formElement = document.getElementById("0");
            }
            let appendJsTimerElement = function(){
                let formTimeDiff = Math.floor((new Date).getTime()/1000) - FORM_TIME_START;
                let cumulatedTimeElement = document.getElementById("tfa_dbCumulatedTime");
                if (null !== cumulatedTimeElement) {
                    let cumulatedTime = parseInt(cumulatedTimeElement.value);
                    if (null !== cumulatedTime && cumulatedTime > 0) {
                        formTimeDiff += cumulatedTime;
                    }
                }
                let jsTimeInput = document.createElement("input");
                jsTimeInput.setAttribute("type", "hidden");
                jsTimeInput.setAttribute("value", formTimeDiff.toString());
                jsTimeInput.setAttribute("name", "tfa_dbElapsedJsTime");
                jsTimeInput.setAttribute("id", "tfa_dbElapsedJsTime");
                jsTimeInput.setAttribute("autocomplete", "off");
                if (null !== formElement) {
                    formElement.appendChild(jsTimeInput);
                }
            };
            if (null !== formElement) {
                if(formElement.addEventListener){
                    formElement.addEventListener('submit', appendJsTimerElement, false);
                } else if(formElement.attachEvent){
                    formElement.attachEvent('onsubmit', appendJsTimerElement);
                }
            }
        });
</script>

<link href="https://www.tfaforms.com/dist/form-builder/5.0.0/wforms-layout.css?v=1696182197" rel="stylesheet"
	type="text/css" />

<link href="https://www.tfaforms.com/uploads/themes/theme-94797.css" rel="stylesheet" type="text/css" />
<link href="https://www.tfaforms.com/dist/form-builder/5.0.0/wforms-jsonly.css?v=1696182197" rel="alternate stylesheet"
	title="This stylesheet activated by javascript" type="text/css" />
<script type="text/javascript" src="https://www.tfaforms.com/wForms/3.11/js/wforms.js?v=1696182197"></script>
<script type="text/javascript">
	if(wFORMS.behaviors.prefill) wFORMS.behaviors.prefill.skip = true;
</script>
<script type="text/javascript" src="https://www.tfaforms.com/wForms/3.11/js/localization-en_US.js?v=1696182197">
</script>

<!-- FORM: BODY SECTION -->
<div class="wFormContainer">
	<div class="wFormHeader"></div>
	<style type="text/css">
		#tfa_2-L,
		label[id^="tfa_2["] {
			width: 285px !important;
			min-width: 0px;
		}
        .wFormContainer {
            max-width: 770px;
        }

        @media (max-width: 600px) {
        .wFormContainer {
            max-width: 320px;
        }
        .wFormContainer .wForm form {
    padding: 0 0rem 0rem 0rem;
}
}
	</style>
	<div class="">
		<div class="wForm" id="4988154-WRPR" dir="ltr">
			<div class="codesection" id="code-4988154"></div>
			<form method="post" action="https://www.tfaforms.com/api_v2/rest/workflow/processor"
				class="hintsBelow labelsAbove" id="4988154" role="form">
				<div class="oneField field-container-D    " id="tfa_1-D">
					<label id="tfa_1-L" class="label preField reqMark" for="tfa_1">First Name</label><br>
					<div class="inputWrapper">
						<input aria-required="true" type="text" id="tfa_1" name="tfa_1" value="" title="First Name" class="required"></div>
					</div>
					<div class="oneField field-container-D    " id="tfa_2-D">
						<label id="tfa_2-L" class="label preField reqMark" for="tfa_2">Last Name</label><br>
						<div class="inputWrapper">
							<input aria-required="true" type="text" id="tfa_2" name="tfa_2" value="" title="Last Name" class="required"></div>
						</div>
						<div class="oneField field-container-D    " id="tfa_4-D">
							<label id="tfa_4-L" class="label preField reqMark" for="tfa_4">Company</label><br>
							<div class="inputWrapper">
								<input aria-required="true" type="text" id="tfa_4" name="tfa_4" value="" title="Company" class="required"></div>
							</div>
							<div class="oneField field-container-D    " id="tfa_5-D">
								<label id="tfa_5-L" class="label preField reqMark" for="tfa_5">E-mail</label><br>
								<div class="inputWrapper">
									<input aria-required="true" type="text" id="tfa_5" name="tfa_5" value="" title="E-mail" class="validate-email required"></div>
								</div>
								<div class="oneField field-container-D     wf-acl-hidden" id="tfa_6-D">
									<label id="tfa_6-L" class="label preField " for="tfa_6">Full name</label><br>
									<div class="inputWrapper">
										<input type="text" id="tfa_6" name="tfa_6" value="" title="Full name" class=""></div>
									</div>
									<div class="actions" id="4988154-A" data-contentid="submit_button">
										<div id="google-captcha" style="display: none">
											<br>
											<div class="captcha">
												<div class="oneField">
													<div class="g-recaptcha" id="g-recaptcha-render-div"></div>
													<div class="g-captcha-error"></div>
													<br>
</div>
													<div class="captchaHelp">reCAPTCHA helps prevent automated form
														spam.<br>
</div>
														<div id="disabled-explanation" class="captchaHelp"
															style="display: none">The submit button will be disabled
															until you complete the CAPTCHA.</div>
													</div>
												</div>
												<input type="submit" data-label="Submit" class="primaryAction" id="submit_button" value="Submit">
</div>
												<div style="clear:both"></div>
												<input type="hidden" value="388-cfa21a57d88b7fdee683fa7df4391d3c" name="tfa_dbCounters" id="tfa_dbCounters" autocomplete="off"><input type="hidden" value="4988154" name="tfa_dbFormId" id="tfa_dbFormId"><input type="hidden" value="" name="tfa_dbResponseId" id="tfa_dbResponseId"><input type="hidden" value="1e6dff808ff5046e5fde932324189b24" name="tfa_dbControl" id="tfa_dbControl"><input type="hidden" value="" name="tfa_dbWorkflowSessionUuid" id="tfa_dbWorkflowSessionUuid"><input type="hidden" value="1696182197" name="tfa_dbTimeStarted" id="tfa_dbTimeStarted" autocomplete="off"><input type="hidden" value="6" name="tfa_dbVersionId" id="tfa_dbVersionId"><input type="hidden" value="" name="tfa_switchedoff" id="tfa_switchedoff">
</form>
											</div>
										</div>
										<div class="wFormFooter">
											<p class="supportInfo"><br></p>
										</div>
										<p class="supportInfo">
										</p>
									</div>
`,
      }}
    />
  );
}
export default FormDemo;
