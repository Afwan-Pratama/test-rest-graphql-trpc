get_pid_node=$( pidof -s node )

get_ps_node=$( ps -p $get_pid_node -u | grep build/index.js )

get_format_cpu=$(echo $get_ps_node | awk '{print $3}')

echo "${get_format_cpu}"
