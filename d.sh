git add *
git commit -m "auto deploy"
git push
ssh root@sakurajimama1.ltd "cd ..;cd usr/local/nginx/html/site-note-deploy; git pull"