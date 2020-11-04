const rules = [
  "1.2.3.4:CA",
  "2.1.1.1:US",
  "3.1.1.1:MX",
  // https://upload.wikimedia.org/wikipedia/commons/7/7b/IP_Address_Match.svg
  "10.10.1.32/27:FR",
// "101.243.23.101/16:FR",
];

function ip2int(ip) {
  return ip.split('.').reduce(function(ipInt, octet) {
    // shift over 8 bits and add next octet
    return ( ipInt << 8 ) + parseInt(octet, 10)
  }, 0); // removed >>> 0 at the end
}

function shiftMatch(ruleIp, numBits, lookupIp) {
  return (ruleIp >> (32 - numBits)) === (lookupIp >> (32 - numBits));
}

function maskMatch(ruleIp, numBits, lookupIp) {
  let netMask = (0x7FFFFFFF >>> (numBits - 1));
  return (ruleIp | netMask) === (lookupIp | netMask);
}

function lookup(ip) {

  let intLookupIp = ip2int(ip);

  let rule = rulesSorted.find((elem) => {

    let trimmedIp = elem.slice(0,-3);

    let [ruleIp, numBits] = trimmedIp.split("/");

    let intRuleIp = ip2int(ruleIp);

    // if CIDR
    if(numBits !== undefined){
      // return shiftMatch(intRuleIp, numBits, intLookupIp);
      return maskMatch(intRuleIp, numBits, intLookupIp);
    } else {
      return intRuleIp === intLookupIp;  
    }
  });

  return rule ? rule.slice(-2) : "Unknown";
}

module.exports = lookup;