var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

console.log('Thank you for your purchase, we really appreciate it...\nYou may also git clone your repo via your startup tab Or follow the steps before to manually install them.\nTo get started follow these steps:\n0) Delete package.json & setup.js (These are just demo files)\n1) Upload your files\n2) Set the startup file in the Startup Parameters tab like node version etc\n3) make profit?\n\nIf you need any support, feel free to contact our team!')
execute("node --version", function(data){
  console.log(`Node Version: ${data}!`);
});
execute("npm --version", function(data){
  console.log(`NPM Version: ${data}!`);
});
setInterval(() => {}, 1 << 30);
