mythtv-hikaritv
===============

# supporting tools of mythtv for hikaritv subscribers / �Ђ���TV�_��Ҍ���MythTV�T�|�[�g�c�[��

## Requirements / �K�v�Ȃ���
1. Java6 JRE
2. MythTV (if you just like to try generating xmltv files, mythtv is not required. / �P��XMLTV�t�@�C�����������Ă݂��������Ȃ�K�{�ł͂���܂���)

## Basic Usage (Generating XMLTV files) / ��{�I�Ȏg����(XMLTV�t�@�C���̍쐬�j
1. Clone the repo as follows: / ���̂悤�ɂ��ă��|�W�g���𕡐����܂��B
	git clone https://github.com/kariya/mythtv-hikaritv.git
2. Confirm the requirements. / �K�v�ȕ��������Ă��邩�m���߂܂��B
3. Type the following command / ���̃R�}���h��ł��Ă�������
	make xmltv
4. Now you've got your own xmltv file / ����ł��Ȃ����g��XMLTV�t�@�C�����ł����͂��ł�
   How to use this? See the next chapter. / �g�����͎��͂����Ă��������B


## Advanced Usage (with mythtv) / �i�񂾎g�����iMythTV�ҁj
1. If you'd like to deploy the xmltv file to mythtv, / XMLTV�t�@�C����MythTV�Ɏ�荞�݂����Ȃ�
	make -n deploy-mythtv
	(remove -n option at your own risk AFTER you modified Makefile file / -n�I�v�V�������͂����̂�Makefile��ҏW���Ă���ɂ��Ă��������j
2. If you want to do schedule recordings, / �\��^�悪�������Ȃ�A
	make record-pendings
	This includes programs pending in 1-25 hours / ����͂P�`�Q�T���Ԍ�̔ԑg���܂݂܂��B


## Acknowledgement / �ӎ�
I thank to the following userful program and so on ver much. / �ȉ��̗L�p�ȃv���O�����E���ɐ[�����ӂ��܂��B
* Rhino
* Env.js
* JQuery
* jquery.form
* perl related stuff
* wikipedia

Why in English? Is HikariTV a Japanese service? -- Yes, it is not needed in fact, but I think it is important that the github admins can know what they host.
/ �Ȃ��p��H�Ђ���TV�͓��{��̃T�[�r�X����Ȃ��́H -- �͂��A�s�v�Ƃ͎v���܂����Agithub�Ǘ��҂��ނ炪�����z�X�g���Ă��邩��m���悤�ɂ��邽�߂ɂ������܂����B

